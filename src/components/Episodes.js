import { useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getEpisodes } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../routes/Characters";
import Episode from "./Episode";

export const episodesLoader = async ({ request }) => {
	const url = new URL(request.url);
	const page = url.searchParams.get("page")
	const episodes = await getEpisodes(page)
	return episodes
}
export const StyledEpisodes = styled.div`
	background-color: hsl(220, 12.3%, 14.3%);
 	box-sizing: border-box;
	width: 100%;
	height: auto;
	episodes-container{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
`

const Episodes = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	const episodes = useLoaderData();
	return (
		<StyledEpisodes>
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