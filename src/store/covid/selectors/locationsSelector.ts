import { RootState } from '#store'
import { Option } from '#types'

const locationsSelector = (state: RootState): Option[] => {
  const countries = Object.entries(state.covid.locations.countries)

  return countries.map(([id, { location }]) => ({ label: location, value: id }))
}

export default locationsSelector
