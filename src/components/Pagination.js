import React, { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../context/GlobalContext'
import { CheveronRight, CheveronLeft } from '@styled-icons/zondicons'

const List = styled.ul`
	display: flex;
	justify-content: center;
	margin-bottom: ${props => props.theme.padding.large};
`
const Link = styled.a`
	display: block;
	padding: ${props => props.theme.padding.small}
		${props => props.theme.padding.medium};
	border: 1px solid ${props => props.theme.colors.primary};
	background: ${props =>
		props.active
			? props.theme.colors.active
			: props.theme.colors.white};
	font-weight: bold;

	&:hover {
		cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
		background: ${props =>
			props.disabled
				? props.theme.colors.white
				: props.theme.colors.hover};
	}
	& svg {
		fill: ${props =>
			props.disabled
				? props.theme.colors.primary
				: props.theme.colors.black};
	}
`

// special style for Links with double cheveron
const EdgeLink = styled(Link)`
	display: flex;
	padding: 0.53em ${props => props.theme.padding.large};
	& svg {
		margin: 0 -0.4em;
	}
`

const Pagination = () => {
	const {
		recordsPerPage,
		recordsToShow,
		goToPage,
		currentPage,
	} = useContext(GlobalContext)

	// create array of page numbers, so it's possible to map through pages
	const pageNums = []

	for (
		let i = 1;
		i <= Math.ceil(recordsToShow / recordsPerPage);
		i++
	) {
		pageNums.push(i)
	}
	const lastPage = pageNums.length

	return (
		<List>
			{/* link to first page */}
			<li>
				<EdgeLink
					disabled={currentPage === 1}
					href='#'
					onClick={() => goToPage(1)}
				>
					<CheveronLeft size='20' />
					<CheveronLeft size='20' />
				</EdgeLink>
			</li>
			{/* link to previous page */}
			<li>
				<Link
					disabled={currentPage === 1}
					href='#'
					onClick={() =>
						currentPage !== 1 && goToPage(currentPage - 1)
					}
				>
					<CheveronLeft size='20' />
				</Link>
			</li>
			{/* links to pages based on number */}
			{currentPage === 1
				? pageNums
						.slice(currentPage - 1, currentPage + 2)
						.map(number => (
							<li key={number}>
								<Link
									active={currentPage === number}
									href='#'
									onClick={() => goToPage(number)}
								>
									{number}
								</Link>
							</li>
						))
				: pageNums
						.slice(currentPage - 2, currentPage + 1)
						.map(number => (
							<li key={number}>
								<Link
									active={currentPage === number}
									href='#'
									onClick={() => goToPage(number)}
								>
									{number}
								</Link>
							</li>
						))}
			{/* link to next page */}
			<li>
				<Link
					href='#'
					disabled={
						currentPage === lastPage ||
						recordsToShow === 0
					}
					onClick={() =>
						currentPage !== pageNums.length &&
						goToPage(currentPage + 1)
					}
				>
					<CheveronRight size='20' />
				</Link>
			</li>
			{/* link to last page */}
			<li>
				<EdgeLink
					href='#'
					disabled={
						currentPage === lastPage ||
						recordsToShow === 0
					}
					onClick={() => goToPage(lastPage)}
				>
					<CheveronRight size='20' />
					<CheveronRight size='20' />
				</EdgeLink>
			</li>
		</List>
	)
}

export default Pagination
