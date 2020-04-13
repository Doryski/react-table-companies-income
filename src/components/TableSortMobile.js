import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import styled from 'styled-components'

const TableCaption = styled.caption`
	display: none;

	@media only screen and (max-width: 690px) {
		display: block;
		margin: ${props => props.theme.padding.large} 0;
	}
`

const TableSortMobile = () => {
	const {
		handleColumnHeaderClick,
		sortDirection,
		setSortDirection,
	} = useContext(GlobalContext)

	return (
		<TableCaption>
			Sort by
			{/* select category/column to sort */}
			<select
				onChange={e =>
					handleColumnHeaderClick(e.target.value)
				}
			>
				<option value='id'>ID</option>
				<option value='name'>Company name</option>
				<option value='city'>City</option>
				<option value='totalIncome'>Total income</option>
				<option value='avgIncome'>Average Income</option>
				<option value='lastMonthIncome'>
					Last Month Income
				</option>
			</select>
			{/* select sort order */}
			<select
				value={sortDirection}
				onChange={e =>
					e.target.value === 'asc'
						? setSortDirection('asc')
						: setSortDirection('desc')
				}
			>
				<option value='asc'>ascending</option>
				<option value='desc'>descending</option>
			</select>
		</TableCaption>
	)
}

export default TableSortMobile
