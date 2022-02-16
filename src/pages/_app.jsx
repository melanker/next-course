/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import theme from '../../theme.js'
import Nav from '../components/Nav/Nav'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Nav />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}
