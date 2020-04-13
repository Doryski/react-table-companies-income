import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.black};
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        // cursor: pointer;
        color: ${props => props.theme.colors.black};
    }

    button {
        cursor: pointer;
        text-align: center;
    }

    section {
        width: 90vw;
        margin: auto;
    }

    table {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
        overflow-x: auto;
        margin: ${props => props.theme.padding.large} 0;
        border: 1px solid ${props => props.theme.colors.primary};
    }
    
    thead th {
        padding: ${props => props.theme.padding.large};
        border-bottom: 2px solid ${props =>
			props.theme.colors.primary};
    }   
    
    tbody tr:nth-of-type(odd) {
        background: ${props => props.theme.colors.odd};
    }

    tbody tr:hover {
        background: ${props => props.theme.colors.hover};
    }

    tbody td {
        padding: ${props => props.theme.padding.large};

    }
    thead th, tbody td {
        &:nth-child(4), :nth-child(5), :nth-child(6) {
            text-align: right;
        } 
    }
    input {
        display: block;
        padding: ${props => props.theme.padding.small} ${props =>
	props.theme.padding.medium};
        font-size: 1em;
        font-weight: 400;
        line-height: 1.5;
        border: 1px solid ${props => props.theme.colors.primary};
        border-radius: 0.25em;
     
        @media only screen and (max-width: 690px) {
		    width: 50%;
	    }
    }

    select {
        margin: 0 ${props => props.theme.padding.small};
        border: 1px solid ${props => props.theme.colors.primary};
        padding: ${props => props.theme.padding.small};
        border-radius: 0.25em;
        font-size: 1em;
    }

   @media only screen and (max-width: 690px) {
        table thead {
            display: none;
        }
        table td {
            display: flex;
            padding: ${props => props.theme.padding.medium};
        }

        table td::before {
            content: attr(label);
            font-weight: bold;
            width: 35%;
            margin-right: ${props => props.theme.padding.small};
        }
        thead th, tbody td {
            &:nth-child(4), :nth-child(5), :nth-child(6) {
                text-align: left;
            } 
        }
    }
`
export default GlobalStyle
