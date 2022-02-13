import MuiFormControlLabel from '@mui/material/FormControlLabel'
import styled from '@mui/material/styles/styled'

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#bbb' : '#333',
}))

export default FormControlLabel
