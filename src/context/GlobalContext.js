import React, { createContext, useEffect, useState } from 'react'
import moment from 'moment'
import { companiesLink, incomesLink } from '../links'
import sort from '../sorting/sort'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(false)
	const [companies, setCompanies] = useState([])

	// fetching data
	const getData = async () => {
		const response = await fetch(companiesLink)
		let data = await response.json()

		const tableData = await data.map(async company => {
			const incomeData = await getCompanyIncomeData(company.id)

			// get array of all company incomes
			const companyIncomes = incomeData.incomes.map(
				income => +income.value
			)
			// sum array of company incomes
			const sumIncome = companyIncomes.reduce(
				(acc, val) => (acc += val)
			)
			// get array of company incomes only from last 30 days
			const lastMonthIncomeData = incomeData.incomes.map(
				income => {
					const recordDate = moment(income.date)
					const currentDate = new moment()
					const diff = currentDate.diff(recordDate, 'days')
					return diff <= 30 && +income.value
				}
			)
			// sum array of company incomes from last 30 days
			const lastMonthIncome = lastMonthIncomeData.reduce(
				(acc, val) => (acc += val)
			)
			// return new object with total, average and
			// last month total income info
			return {
				...company,
				totalIncome: sumIncome.toFixed(2),
				avgIncome: (
					sumIncome / companyIncomes.length
				).toFixed(2),
				lastMonthIncome: lastMonthIncome.toFixed(2),
			}
		})
		return Promise.all(tableData)
	}

	// get income dataset of each company based on id
	const getCompanyIncomeData = async id => {
		const response = await fetch(incomesLink + id)
		const incomeData = await response.json()
		return incomeData
	}
	// load data when component mounts
	useEffect(() => {
		const getTableData = async () => {
			setLoading(true)
			const data = await getData()

			setCompanies(data)
			setLoading(false)
		}

		getTableData()
		// sort initial table by id, ascending
		sort(companies)
	}, [])
	// end fetching data

	// sorting
	const [sortKey, setSortKey] = useState('id')
	const [sortDirection, setSortDirection] = useState('asc')

	const handleColumnHeaderClick = key => {
		if (key === sortKey) {
			sortDirection === 'asc'
				? setSortDirection('desc')
				: setSortDirection('asc')
		} else {
			setSortDirection('asc')
		}
		setSortKey(key)
	}

	let sortedData = sort(companies, sortKey, sortDirection)
	// end sorting

	// filtering
	const [search, setSearch] = useState('')

	const handleFilterChange = e => {
		const value = e.target.value || ''
		setSearch(value)
		setCurrentPage(1)
	}

	let filteredData = sortedData.filter(
		company =>
			company.name.toLowerCase().includes(search) ||
			company.city.toLowerCase().includes(search) ||
			company.id.toString().includes(search) ||
			company.avgIncome.toString().includes(search) ||
			company.totalIncome.toString().includes(search) ||
			company.lastMonthIncome.toString().includes(search)
	)
	// end filtering

	// pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [recordsPerPage, setRecordsPerPage] = useState(5)

	const indexOfLastRecord = currentPage * recordsPerPage
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
	// use only filtered records
	const currentRecords = filteredData.slice(
		indexOfFirstRecord,
		indexOfLastRecord
	)

	const goToPage = pageNumber => setCurrentPage(pageNumber)
	// end pagination

	return (
		<GlobalContext.Provider
			value={{
				companies,
				setCompanies,
				loading,
				sortKey,
				sortDirection,
				setSortDirection,
				handleColumnHeaderClick,
				search,
				setSearch,
				filteredData,
				handleFilterChange,
				currentPage,
				currentRecords,
				recordsPerPage,
				setRecordsPerPage,
				recordsToShow: filteredData.length,
				goToPage,
				indexOfFirstRecord,
				indexOfLastRecord,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalContext
