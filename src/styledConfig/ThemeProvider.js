import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import GlobalStyle from './GlobalStyle'

// create styled components theme provider
const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			{children}
		</>
	</ThemeProvider>
)

export default Layout
