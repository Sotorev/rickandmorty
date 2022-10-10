import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getEpisodes } from "../data";

export const episodesLoader = async ({ params, request }) => {
	const url = new URL(request.url);
	const page = url.searchParams.get("page")
	console.log(`Valor de page: ${page}`)
	const episodes = await getEpisodes(params.page)
	return episodes
}
export const StyledEpisodes = styled.div`
 	box-sizing: border-box;
	background-color: white;
	width: auto;
	height: 800px;
	margin: 5rem;

`

const Episodes = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	function handleSubmit(event) {
		event.preventDefault();
		// The serialize function here would be responsible for
		// creating an object of { key: value } pairs from the
		// fields in the form that make up the query.
		console.log(event.target)
	}
	return (
		<StyledEpisodes>
			{/* <Link>Previus Page</Link>
			<br/>
			<Link>Next Page</Link> */}
			
			<form onSubmit={handleSubmit}>
					<input></input>
			</form>
			
		</StyledEpisodes>
		
	)
}
export default Episodes;