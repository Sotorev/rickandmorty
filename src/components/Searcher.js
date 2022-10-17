import styled from "styled-components";

const StyledSearcher = styled("form")`
	display: inline;
	width: 100%;
	input{
		height: 40px;
		border-radius: 2rem;
	}
	@media screen and (max-width: 800px){
		  
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
		<StyledSearcher id="search-form" role="search" className="">
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
