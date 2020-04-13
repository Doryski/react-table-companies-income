import React from 'react'
import Layout from '../styledConfig/ThemeProvider'
import Table from './Table'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import { GlobalContextProvider } from '../context/GlobalContext'

const App = () => {
	return (
		// context provider
		<GlobalContextProvider>
			{/* style provider */}
			<Layout>
				{/* app wrapper */}
				<section>
					<TopSection />
					<Table />
					<BottomSection />
				</section>
			</Layout>
		</GlobalContextProvider>
	)
}

export default App
