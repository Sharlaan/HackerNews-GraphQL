import { indigo, orange, red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// All the following keys are optional.
// We try our best to provide a great default value.
const customTheme = createMuiTheme({
  palette: {
    error: red,
    primary: indigo,
    secondary: orange,
    // Used by `getContrastText()` to maximize the contrast
    // between the background and the text.
    // contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  },
  typography: {
    fontFamily: '"Open Sans"',
    // fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },
})

export default customTheme
