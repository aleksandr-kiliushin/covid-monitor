import { LocationData } from '#types'

export type LoadLocationsReturn = {
  countries: Record<string, LocationData>
  world: LocationData
} | null
