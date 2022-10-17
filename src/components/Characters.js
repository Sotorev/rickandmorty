import { useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Character from "./Character";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";



const StyledCharacters = styled.div`
	background-color: hsl(220, 12.3%, 14.3%);
	min-height: 100vh;

	@media screen and (max-width: 1254px) {
		padding-top: 20rem;
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
			top: 100px;
			background-color: black;
			width: 100%;
			height: 50px;
		}
	}

`
export const StyledButton = styled('button')`
	&:hover{
		cursor: pointer;
		background-color: rgb(255,152,0);
	}
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
		position: absolute;
		z-index: 1;
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
	const characters = useLoaderData().results;
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<StyledCharacters>

			<div className="button-changer-container">
				{useLoaderData().info.prev != null &&
					<StyledButton
						className="prev"
						onClick={() => {
								searchParams.set("page", parseInt(searchParams.get("page"))-1)
								setSearchParams(searchParams)
							}}
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</StyledButton>
				}
				{useLoaderData().info.next != null &&
					<StyledButton
						className="next"
						onClick={
							() => {
								searchParams.set("page", parseInt(searchParams.get("page")) + 1)
								setSearchParams(searchParams)
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
					origin={character.origin.name}
				/>)}
			</div>
		</StyledCharacters>
	);
}
export default Characters;