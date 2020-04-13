import React, { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../context/GlobalContext'

const SelectLabel = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Select = () => {
	const { recordsPerPage, setRecordsPerPage } = useContext(
		GlobalContext
	)

	return (
		<SelectLabel>
			Show
			<select
				value={recordsPerPage}
				onChange={e => setRecordsPerPage(e.target.value)}
			>
				<option value='5'>5</option>
				<option value='10'>10</option>
				<option value='15'>15</option>
				<option value='25'>25</option>
			</select>
			entries
		</SelectLabel>
	)
}

export default Select
