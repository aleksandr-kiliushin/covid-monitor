const shortenNumber = (value: number): string => {
  if (value >= 1_000 && value < 999_999) {
    return (value / 1_000).toString() + 'K'
  }

  if (value >= 1_000_000) {
    return (value / 1_000_000).toString() + 'M'
  }

  return value.toString()
}

export default shortenNumber
