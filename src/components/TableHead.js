import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const TableHead = ({ cheveron }) => {
	const { sortKey, handleColumnHeaderClick } = useContext(
		GlobalContext
	)

	return (
		<thead>
			<tr>
				<th onClick={() => handleColumnHeaderClick('id')}>
					ID
					{sortKey === 'id' && cheveron}
				</th>
				<th onClick={() => handleColumnHeaderClick('name')}>
					Company Name
					{sortKey === 'name' && cheveron}
				</th>
				<th onClick={() => handleColumnHeaderClick('city')}>
					City
					{sortKey === 'city' && cheveron}
				</th>
				<th
					onClick={() =>
						handleColumnHeaderClick('totalIncome')
					}
				>
					Total income
					{sortKey === 'totalIncome' && cheveron}
				</th>
				<th
					onClick={() =>
						handleColumnHeaderClick('avgIncome')
					}
				>
					Average Income
					{sortKey === 'avgIncome' && cheveron}
				</th>
				<th
					onClick={() =>
						handleColumnHeaderClick('lastMonthIncome')
					}
				>
					Last Month Income
					{sortKey === 'lastMonthIncome' && cheveron}
				</th>
			</tr>
		</thead>
	)
}

export default TableHead
