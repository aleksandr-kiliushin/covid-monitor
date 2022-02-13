import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { LoadingStatus } from '#constants/shared'
import { LocationData } from '#types'

import { loadLocations } from './action-creators'
import { LoadLocationsReturn } from './types'

type State = {
  locations: {
    countries: Record<string, LocationData>
    loadingStatus: LoadingStatus
    world: LocationData | null
  }
}
const initialState: State = {
  locations: {
    countries: {},
    loadingStatus: LoadingStatus.IDLE,
    world: null,
  },
}

const slice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(
      loadLocations.fulfilled,
      (state, action: PayloadAction<LoadLocationsReturn>) => {
        if (action.payload === null) return
        const { countries, world } = action.payload
        state.locations.countries = countries
        state.locations.world = world
      },
    )
  },
  initialState,
  name: 'covid',
  reducers: {},
})

export default slice.reducer
