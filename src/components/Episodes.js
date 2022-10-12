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


	return (
		<StyledEpisodes>
			<button onClick={() => setSearchParams({ page: 2 })}>Previus Page</button>
			<br/>
			<Link>Next Page</Link>
			{/* <h1>{searchParams}</h1> */}

			
		</StyledEpisodes>
		
	)
}
export default Episodes;