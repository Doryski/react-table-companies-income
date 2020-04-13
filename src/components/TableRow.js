import React from 'react'

const TableRow = ({ company }) => {
	return (
		<tr>
			<td label='ID'>{company.id}</td>
			<td label='Company Name'>{company.name}</td>
			<td label='City'>{company.city}</td>
			<td label='Total income'>{company.totalIncome}</td>
			<td label='Average Income'>{company.avgIncome}</td>
			<td label='Last Month Income'>
				{company.lastMonthIncome}
			</td>
		</tr>
	)
}

export default TableRow
