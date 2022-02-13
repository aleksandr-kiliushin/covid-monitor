import { createAsyncThunk } from '@reduxjs/toolkit'

import { LoadingStatus } from '#constants/shared'
import { RootState } from '#store'
import { ApiLocationData, LocationData } from '#types'
import getDbItem from '#utils/db/getDbItem'
import setDbItem from '#utils/db/setDbItem'
import prepareLocationData from '#utils/prepareLocationData'

import { setLoadingStatus } from '.'
import preloadedFallbackData from '../../../data/fallback-data.json'
import { LoadLocationsReturn } from './types'

export const loadLocations = createAsyncThunk<LoadLocationsReturn, void, { state: RootState }>(
  'covid/loadLocations',
  async (_, { dispatch, getState }): Promise<LoadLocationsReturn> => {
    if (getState().covid.locations.loadingStatus !== LoadingStatus.IDLE) return null

    dispatch(setLoadingStatus(LoadingStatus.LOADING))

    // Try to load data.
    try {
      // Try to load previously cached data.
      try {
        const locations = await getDbItem<LoadLocationsReturn>('locations')
        if (locations !== null) {
          dispatch(setLoadingStatus(LoadingStatus.COMPLETED))
          return locations
        }
      } catch {
        console.warn('Could not get data from local DB. Loading data from remote source...')
      }

      // Try to load data from the remote source.
      try {
        const response = await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
        const apiLocations: Record<string, ApiLocationData> = await response.json()

        const countries: Record<string, LocationData> = {}

        for (const [locationId, locationInfo] of Object.entries(apiLocations)) {
          if (locationId.startsWith('OWID')) continue // Filter out everything except countries.
          countries[locationId] = prepareLocationData(locationInfo)
        }

        const world: LocationData = prepareLocationData(apiLocations['OWID_WRL'])

        // Try to cache the loaded data to indexed db.
        try {
          await setDbItem({
            data: { countries, world },
            expiresIn: 10,
            key: 'locations',
          })
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Couldn't cache the loaded data.")
        }

        dispatch(setLoadingStatus(LoadingStatus.COMPLETED))
        return { countries, world }
      } catch (error) {
        console.error(
          "Couldn't get data from remote source. Fallback to preloaded data from 2022-02-13...",
        )
      }

      const { OWID_WRL: world, ...countries } = preloadedFallbackData as Record<
        string,
        LocationData
      >

      dispatch(setLoadingStatus(LoadingStatus.COMPLETED))
      return { countries, world }
    } catch (error) {
      console.error(error)
      dispatch(setLoadingStatus(LoadingStatus.ERROR))
      return null
    }
  },
)
