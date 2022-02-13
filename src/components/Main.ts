import styled from '@mui/material/styles/styled'

const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  padding: '40px 80px',
  backgroundColor: theme.palette.mode === 'light' ? '#eee' : '#333',
  transition: 'background-color 0.3s',
  [theme.breakpoints.down('lg')]: {
    padding: '30px 60px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0',
  },
}))

export default Main
