const preprocessStatisticsValue = (value: number | undefined): number => {
  if (value === undefined) return 0
  if (value < 0) return 0
  return value
}

export default preprocessStatisticsValue
