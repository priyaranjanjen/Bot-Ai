import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            dark: '#9785BA',
            main: '#AF9FCD',
            light: '#F9FAFA',
        },
        secondary: {
            main: '#D7C7F4',
            light: '#F9FAFA',
        },
        text: {
            main: '#D7C7F4',
            primary: '#000000',
            secondary: 'rgba(0,0,0,0.5)',
        }
        
    },
    typography: {
        body1: {
            fontFamily: 'Open Sans, sans-serif'
        },
        h1: {
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: 28,
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: 28,
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: 22,
            },
        },
        heading: {
            fontFamily: 'Ubuntu, sans-serif',
        }
    },
})

export default theme;