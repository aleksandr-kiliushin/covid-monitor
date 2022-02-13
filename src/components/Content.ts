import styled from '@mui/material/styles/styled'

const Content = styled('div')(({ theme }) => ({
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
  padding: '16px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: theme.palette.mode === 'light' ? 'lightgray' : '#444',
  borderRadius: '8px',
  boxShadow: `0 0 10px ${theme.palette.mode === 'light' ? 'lightgray' : '#00000077'}`,
  [theme.breakpoints.down('md')]: {
    borderRadius: '0',
  },
}))

export default Content
