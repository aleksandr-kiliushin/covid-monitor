import { createAsyncThunk } from '@reduxjs/toolkit'

import { LoadingStatus } from '#constants/shared'
import { RootState } from '#store'
import { ApiLocationData, LocationData } from '#types'
import getDbItem from '#utils/db/getDbItem'
import setDbItem from '#utils/db/setDbItem'
import prepareLocationData from '#utils/prepareLocationData'

import preloadedFallbackData from '../../../data/fallback-data.json'
import { LoadLocationsReturn } from './types'

export const loadLocations = createAsyncThunk<LoadLocationsReturn, void, { state: RootState }>(
  'covid/loadLocations',
  async (dispatch, { getState }): Promise<LoadLocationsReturn> => {
    // ToDo: Check LoadingStatus.
    if (getState().covid.locations.loadingStatus !== LoadingStatus.IDLE) return null

    try {
      const locations = await getDbItem<LoadLocationsReturn>('locations')
      if (locations !== null) return locations
    } catch {
      // eslint-disable-next-line no-console
      console.warn('Could not get data from local DB. Loading data from remote source...')
    }

    try {
      const apiLocations: Record<string, ApiLocationData> = await fetch(
        'https://covid.ourworldindata.org/data/owid-covid-data.json',
      ).then((response) => response.json())

      const countries: Record<string, LocationData> = {}

      for (const [locationId, locationInfo] of Object.entries(apiLocations)) {
        if (locationId.startsWith('OWID')) continue // Filter out everything except countries.
        countries[locationId] = prepareLocationData(locationInfo)
      }

      const world: LocationData = prepareLocationData(apiLocations['OWID_WRL'])

      try {
        await setDbItem({
          data: { countries, world },
          expiresIn: 60 * 60 * 8,
          key: 'locations',
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error while caching the loaded data...')
      }

      return { countries, world }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        'Could not get data from remote source. Fallback to preloaded data from 2022-02-13...',
      )
    }

    const { OWID_WRL: world, ...countries } = preloadedFallbackData as Record<string, LocationData>

    return { countries, world }
  },
)
