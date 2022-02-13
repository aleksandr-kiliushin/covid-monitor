import styled from '@mui/material/styles/styled'

const Main = styled('main')(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  padding: '40px 80px',
  backgroundColor: theme.palette.mode === 'light' ? '#eee' : '#333',
  transition: 'background-color 0.3s',
  [theme.breakpoints.down('lg')]: {
    padding: '30px 60px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  },
}))

export default Main
