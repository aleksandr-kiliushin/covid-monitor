import addSeconds from 'date-fns/addSeconds'
import localForage from 'localforage'

import { StoredValue } from './types'

type SetDbItem = (params: { data: unknown; expiresIn: number; key: string }) => Promise<void>

const setDbItem: SetDbItem = async ({ data, expiresIn, key }) => {
  const expiresAt = addSeconds(new Date(), expiresIn)

  localForage.setItem<StoredValue<unknown>>(key, { data, expiresAt })
}

export default setDbItem
