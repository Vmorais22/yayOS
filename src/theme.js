import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f55617',
        },
        secondary: {
            main: '#25b000',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#353333',
            prove:'#fdfd29',
        },
    },
});

export default theme;