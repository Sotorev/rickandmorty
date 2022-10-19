import styled from "styled-components";
import { Form } from "react-router-dom";

const StyledSearcher = styled(Form)`
	display: inline;

	input{
		height: 40px;
		border-radius: 2rem;
	}
	@media screen and (max-width: 800px){
		width: 100%;
		input{
			border: none;
			border-radius: 0%;
			padding: 0;
			width: 100%;
		}
	}
`


const Searcher = ({ searchParams, handleChange }) => {
	

	return (
		<StyledSearcher id="search-form" role="search">
			<input
				aria-label="Search contacts"
				placeholder="Search"
				type="text"
				name="name"
				// value={searchParams.get("name")}
				onChange={handleChange}
				onKeyDown={(event) => { if (event.key === "Enter") event.preventDefault() } }
			/>
			{/* <button
				type="search"
				aria-label="Search"
			>
				Search
			</button> */}

		</StyledSearcher>
	);
}

export default Searcher;
