import { FC, useEffect, useState } from 'react'

import Content from '#components/Content'
import Main from '#components/Main'
import TabPanel, { TabId } from '#components/TabPanel'
import { loadLocations } from '#store/covid/action-creators'
import { Location } from '#types'
import { useAppDispatch } from '#utils/hooks'

import Header from './Header'
import RankedCharts from './RankedCharts'
import ReportedCases from './ReportedCases'
import { StyledColorModeSwitch, StyledTab, StyledTabs } from './components'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [selectedTabId, setSelectedTabId] = useState<TabId>(TabId.REPORTED_CASES)

  useEffect(() => {
    dispatch(loadLocations())
  }, [])

  return (
    <Main>
      <Content>
        <Header setSelectedLocation={setSelectedLocation} />
        <StyledTabs
          value={selectedTabId}
          onChange={(event, value): void => setSelectedTabId(value)}
        >
          <StyledTab label="Reported cases" />
          <StyledTab label="Ranked charts" />
        </StyledTabs>
        <TabPanel tabId={TabId.REPORTED_CASES} selectedTabId={selectedTabId}>
          <ReportedCases location={selectedLocation} />
        </TabPanel>
        <TabPanel tabId={TabId.RANKED_CHARTS} selectedTabId={selectedTabId}>
          <RankedCharts location={selectedLocation} />
        </TabPanel>
      </Content>

      <StyledColorModeSwitch />
    </Main>
  )
}

export default App
