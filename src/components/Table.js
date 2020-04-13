import React, { useContext } from 'react'
import TableRow from './TableRow'
import GlobalContext from '../context/GlobalContext'
import styled from 'styled-components'
import TableHead from './TableHead'
import { CheveronUp, CheveronDown } from '@styled-icons/zondicons'
import TableSortMobile from './TableSortMobile'

const LoadingInfo = styled.h1`
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Table = () => {
	const { loading, currentRecords, sortDirection } = useContext(
		GlobalContext
	)

	if (loading) {
		return <LoadingInfo>Loading data...</LoadingInfo>
	}

	// show cheveron depending on sort direction
	const cheveron =
		sortDirection === 'asc' ? (
			<CheveronUp size='20' />
		) : (
			<CheveronDown size='20' />
		)

	return (
		<table>
			<TableSortMobile cheveron={cheveron} />
			<TableHead cheveron={cheveron} />
			<tbody>
				{currentRecords.map(company => (
					<TableRow key={company.id} company={company} />
				))}
			</tbody>
		</table>
	)
}

export default Table
