import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

const LoadingProgressMessage: FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem', margin: 'auto' }}>
    <Typography sx={{ margin: 'auto', color: 'info.main' }}>
      Loading data, it may take some time...
    </Typography>
    <CircularProgress sx={{ margin: 'auto' }} />
  </Box>
)

const ErrorMessage: FC = () => (
  <Typography sx={{ margin: 'auto', color: 'error.main' }}>Could not load data.</Typography>
)

const EmptyDataMessage: FC = () => (
  <Typography sx={{ margin: 'auto', color: 'error.main' }}>Loaded empty data.</Typography>
)

export { EmptyDataMessage, ErrorMessage, LoadingProgressMessage }
