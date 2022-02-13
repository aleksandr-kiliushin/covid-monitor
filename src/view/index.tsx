import styled from '@emotion/styled'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { FC, useEffect, useState } from 'react'

import Autocomplete from '#components/Autocomplete'
import TabPanel, { TabId } from '#components/TabPanel'
import { loadLocations } from '#store/covid/action-creators'
import { locationsSelector } from '#store/covid/selectors'
import { Location } from '#types'
import { useAppDispatch, useAppSelector } from '#utils/hooks'

import RankedCharts from './RankedCharts'
import ReportedCases from './ReportedCases'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  background-color: #e0f2f1;
  border-radius: 5px;
`

const App: FC = () => {
  const dispatch = useAppDispatch()
  const locations = useAppSelector(locationsSelector)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [selectedTabId, setSelectedTabId] = useState<TabId>(TabId.REPORTED_CASES)

  useEffect(() => {
    dispatch(loadLocations())
  }, [])

  return (
    <main>
      <Wrapper>
        <Autocomplete
          label="Location"
          onChange={(event, value): void => setSelectedLocation(value)}
          options={locations}
        />
        <Tabs value={selectedTabId} onChange={(event, value): void => setSelectedTabId(value)}>
          <Tab label="Reported cases" />
          <Tab label="Ranked charts" />
        </Tabs>
        <TabPanel tabId={TabId.REPORTED_CASES} selectedTabId={selectedTabId}>
          <ReportedCases location={selectedLocation} />
        </TabPanel>
        <TabPanel tabId={TabId.RANKED_CHARTS} selectedTabId={selectedTabId}>
          <RankedCharts location={selectedLocation} />
        </TabPanel>
      </Wrapper>
    </main>
  )
}

export default App
