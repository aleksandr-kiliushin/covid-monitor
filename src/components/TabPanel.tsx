import styled from '@emotion/styled'
import { FC } from 'react'

const Wrapper = styled.div`
  flex-grow: 1;
`

export enum TabId {
  REPORTED_CASES,
  RANKED_CHARTS,
}

type Props = {
  selectedTabId: TabId
  tabId: TabId
}

const TabPanel: FC<Props> = ({ children, selectedTabId, tabId }) => (
  <Wrapper hidden={tabId !== selectedTabId} role="tabpanel">
    {children}
  </Wrapper>
)

export default TabPanel
