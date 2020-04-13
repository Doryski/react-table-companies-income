import React, { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../context/GlobalContext'
import { CheveronRight, CheveronLeft } from '@styled-icons/zondicons'

const List = styled.ul`
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 690px) {
		margin-top: ${props => props.theme.padding.small};
	}
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
const CheveronLink = styled(Link)`
	display: flex;
	padding: ${props => props.theme.padding.small}
		${props => props.theme.padding.small};
`

// special style for Links with double cheveron
const EdgeLink = styled(Link)`
	display: flex;
	padding: ${props => props.theme.padding.small}
		${props => props.theme.padding.medium};
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
	const cheveronSize = 22

	return (
		<List>
			{/* link to first page */}
			<li>
				<EdgeLink
					disabled={currentPage === 1}
					href='#'
					onClick={() => goToPage(1)}
				>
					<CheveronLeft size={cheveronSize} />
					<CheveronLeft size={cheveronSize} />
				</EdgeLink>
			</li>
			{/* link to previous page */}
			<li>
				<CheveronLink
					disabled={currentPage === 1}
					href='#'
					onClick={() =>
						currentPage !== 1 && goToPage(currentPage - 1)
					}
				>
					<CheveronLeft size={cheveronSize} />
				</CheveronLink>
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
				<CheveronLink
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
					<CheveronRight size={cheveronSize} />
				</CheveronLink>
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
					<CheveronRight size={cheveronSize} />
					<CheveronRight size={cheveronSize} />
				</EdgeLink>
			</li>
		</List>
	)
}

export default Pagination
