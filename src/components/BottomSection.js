import React, { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../context/GlobalContext'
import Pagination from './Pagination'

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${props => props.theme.padding.large};

	@media only screen and (max-width: 690px) {
		flex-direction: column;
		text-align: center;
	}
`

const BottomSection = () => {
	const {
		recordsToShow,
		indexOfFirstRecord,
		indexOfLastRecord,
	} = useContext(GlobalContext)

	return (
		<Wrapper>
			<span>
				{recordsToShow > 0
					? `Showing ${indexOfFirstRecord + 1} to ${
							indexOfLastRecord <= recordsToShow
								? indexOfLastRecord
								: recordsToShow
					  } of 
			${recordsToShow} entries`
					: 'Entries not found'}
			</span>
			<Pagination />
		</Wrapper>
	)
}

export default BottomSection
