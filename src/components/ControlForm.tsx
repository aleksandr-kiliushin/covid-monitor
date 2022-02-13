import styled from '@mui/material/styles/styled'

const ControlForm = styled('form')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: '1rem',
  border: '1px solid black',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'auto',
  },
}))

export default ControlForm
