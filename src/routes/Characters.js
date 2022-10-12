import { useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Character from "../components/Character";
import { getCharacters } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export async function loader({ params, request }) {

	const url = new URL(request.url);
	const page = url.searchParams.get("page")
	const characters = await getCharacters(page);
	return characters;
}

const StyledCharacters = styled.div`
	@media screen and (max-width: 1254px) {
		padding-top: 10rem;
		.characters-container{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	@media screen and (min-width: 1255px) {
		padding: 5rem;
		.characters-container{
			display: grid;
			grid-template-columns: 600px 600px;
			gap: 50px;
			justify-content: space-evenly;
		}
	}
	@media screen and (max-width: 800px){
		.button-changer-container{
			position: fixed;
			z-index: 0;
			top: 50px;
			background-color: black;
			width: 100%;
			height: 50px;
		}
	}

`
const StyledButton = styled('button')`
	background-color: greenyellow;
	border: none;
	width: 50px;
	height: 50px;
	border-radius: 100%;
	position: fixed;
	top: 50%;
	&.prev{
		left: 5%;
	}
  &.next{
		right: 5%;
	}
	@media screen and (max-width: 800px){
		z-index: 0;

		position: absolute;
		top: 20%;
		border-radius: 10px;
		width: 60px;
		height: 30px;
		
			&.prev{
				left: 10%;
			}
			&.next{
				right: 10%;
			}
		}
		
`

const Characters = () => {
	const characters = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<StyledCharacters>
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
				{parseInt(searchParams.get("page")) < 42 &&
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
			<div className="characters-container">
				{characters.map(character => <Character
					key={character.id}
					id={character.id}
					name={character.name}
					status={character.status}
					species={character.species}
					gender={character.gender}
					location={character.location}
					image={character.image}

				/>)}
			</div>
		</StyledCharacters>
	)
}
export default Characters;