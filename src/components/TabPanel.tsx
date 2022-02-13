import styled from '@mui/material/styles/styled'
import { FC } from 'react'

const Wrapper = styled('div')<{ isActive: boolean }>(({ isActive }) => ({
  flexGrow: '1',
  display: isActive ? 'flex' : 'none',
  flexDirection: 'column',
}))

export enum TabId {
  REPORTED_CASES,
  RANKED_CHARTS,
}

type Props = {
  selectedTabId: TabId
  tabId: TabId
}

const TabPanel: FC<Props> = ({ children, selectedTabId, tabId }) => (
  <Wrapper isActive={tabId === selectedTabId} role="tabpanel">
    {children}
  </Wrapper>
)

export default TabPanel
