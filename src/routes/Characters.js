import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Character from "../components/Character";
import { getCharacters } from "../data";

export async function loader({ params, request }) {

	const url = new URL(request.url);
	const q = url.searchParams.get("q")
	console.log(`Valor de q: ${q}`)
	const characters = await getCharacters(params.page);
	return characters;
}

const StyledCharacters = styled.div`
	@media screen and (max-width: 1254px) {
		padding-top: 5rem;
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

`
const StyledLink = styled(Link)`
`

const Characters = () => {
	const characters = useLoaderData();

	return (
		<StyledCharacters>
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