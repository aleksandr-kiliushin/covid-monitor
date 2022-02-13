import { Dispatch, FC, SetStateAction } from 'react'

import { locationsSelector } from '#store/covid/selectors'
import { Location } from '#types'
import { useAppSelector } from '#utils/hooks'

import { StyledAutocomplete, StyledColorModeSwitch, StyledHeader } from './components'

type Props = {
  setSelectedLocation: Dispatch<SetStateAction<Location | null>>
}

const Header: FC<Props> = ({ setSelectedLocation }) => {
  const locations = useAppSelector(locationsSelector)

  return (
    <StyledHeader>
      <StyledAutocomplete
        label="Select a country..."
        onChange={(event, value): void => setSelectedLocation(value)}
        options={locations}
      />
      <StyledColorModeSwitch />
    </StyledHeader>
  )
}

export default Header
