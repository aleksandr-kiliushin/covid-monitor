import createTheme from '@mui/material/styles/createTheme'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          padding: '12px 20px',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '.MuiInputBase-input': {
            padding: '8px 12px',
          },
          '.MuiInputLabel-root:not(.Mui-focused):not(.MuiFormLabel-filled)': {
            top: '-8px',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
        },
        root: {
          '&:not(:first-of-type)': {
            paddingLeft: '4px',
          },
          '&:not(:last-of-type)': {
            paddingRight: '4px',
          },
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'monospace',
      lineHeight: '1',
    },
    body1: {
      fontSize: '1.6rem',
    },
  },
})

export default theme
