import { LoadingStatus } from '#constants/shared'
import { RootState } from '#store'

const loadingStatusSelector = (state: RootState): LoadingStatus =>
  state.covid.locations.loadingStatus

export default loadingStatusSelector
