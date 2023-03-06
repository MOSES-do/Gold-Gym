import { createTheme } from '@mui/material'

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            xss: 300,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
})


/*
Go to sheet needed
import {ThemeProvider} from "@mui/material"
import {theme} from "./styles/styles"
- Create a theme provider wrapping the component
<ThemeProvider>
<div className="app"></div>
</ThemeProvider>
*/