import styled from "styled-components";

const StyledSearcher = styled("form")`
	display: inline;
	input{
		height: 40px;
		border-radius: 2rem;
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
			/>
		</StyledSearcher>
	);
}

export default Searcher;
