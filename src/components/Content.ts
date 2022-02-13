import styled from '@mui/material/styles/styled'

const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
  height: '100%',
  padding: '16px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: theme.palette.mode === 'light' ? '#cfe0e2' : '#444',
  borderRadius: '8px',
  boxShadow: `0 0 10px ${theme.palette.mode === 'light' ? '#cfe0e2ff' : '#eeeeee44'}`,
  [theme.breakpoints.down('sm')]: {
    borderRadius: '0',
  },
}))

export default Content
