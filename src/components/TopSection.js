import React, { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../context/GlobalContext'
import Select from './Select'

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
`

const SearchLabel = styled.label`
	display: flex;
	margin-top: ${props => props.theme.padding.large};
`
const Search = styled.span`
	margin: auto ${props => props.theme.padding.medium} auto 0;
`

const TopSection = () => {
	const { search, handleFilterChange } = useContext(GlobalContext)

	return (
		<Wrapper>
			<SearchLabel>
				<Search>Search: </Search>
				<input
					type='text'
					value={search || ''}
					onChange={handleFilterChange}
				/>
			</SearchLabel>
			<Select />
		</Wrapper>
	)
}

export default TopSection
