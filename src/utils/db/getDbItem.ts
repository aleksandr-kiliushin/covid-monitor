import isAfter from 'date-fns/isAfter'
import localForage from 'localforage'

import { StoredValue } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDbItem = async <T>(key: string): Promise<T | null> => {
  const chachedValue = await localForage.getItem<StoredValue<T>>(key)

  if (chachedValue === null) return null

  const { data, expiresAt } = chachedValue

  const isExpired = isAfter(new Date(), expiresAt)

  if (isExpired) {
    localForage.removeItem(key)
    return null
  }

  return data
}

export default getDbItem
