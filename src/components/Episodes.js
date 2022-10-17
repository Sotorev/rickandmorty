import { useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getEpisodes } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "./Characters";
import Episode from "./Episode";

export const episodesLoader = async ({ request }) => {
	const url = new URL(request.url);
	const page = url.searchParams.get("page")
	const episodes = await getEpisodes(page)
	return episodes
}
export const StyledEpisodes = styled.div`
	/* .button-changer-container{display:none} */
	padding: 110px 0;
	background-color: hsl(220, 12.3%, 14.3%);
 	box-sizing: border-box;
	width: 100%;
	min-height:100vh;

	.episodes-container{
			display: grid;
			row-gap: 50px;
			justify-content: space-evenly;
	}
	@media only screen and (max-width: 800px){
		.episodes-container{
			grid-template-columns: auto;
			justify-content: center;
		}
		.button-changer-container{
			position: fixed;
			z-index: 0;
			top: 50px;
			background-color: black;
			width: 100%;
			height: 50px;
		}
	}
	@media only screen and (min-width: 801px) {
		/* padding-top: 10rem; */
		.episodes-container{
			grid-template-columns: 400px;
			align-items: center;
		}
	}
	@media only screen and (min-width:1255px) and (max-width: 1600px) {
		/* padding: 5rem; */
		.episodes-container{
			display: grid;
			grid-template-columns: 400px 400px;
			gap: 50px;
			justify-content: space-evenly;
		}
	}
	@media only screen and (min-width: 1600px){
		.episodes-container{
			grid-template-columns: 400px 400px 400px;
		}

	}

	
	
	
`

const Episodes = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	const episodes = useLoaderData();
	return (
		<StyledEpisodes className="aaaa">
			<div className="button-changer-container">
				{parseInt(searchParams.get("page")) > 1 &&
					<StyledButton
						className="prev"
						onClick={
							() => {
								setSearchParams({ page: parseInt(searchParams.get("page")) - 1 })
							}}
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</StyledButton>
				}
				{parseInt(searchParams.get("page")) < 3 &&
					<StyledButton
						className="next"
						onClick={
							() => {
								setSearchParams({ page: parseInt(searchParams.get("page")) + 1 })
							}}
					>
						<FontAwesomeIcon icon={faArrowRight} />
					</StyledButton>}
			</div>
			<div className="episodes-container">
				{
					episodes.map(episode =>
						<Episode
							key={episode.id}
							name={episode.name}
							air_date={episode.air_date}
							episode={episode.episode}
						/>)
				}
			</div>
		</StyledEpisodes>

	)
}
export default Episodes;