import styled from '@mui/material/styles/styled'

const Form = styled('form')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'auto',
  },
}))

export default Form
