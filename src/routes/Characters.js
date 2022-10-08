import { useLoaderData } from "react-router-dom";
import Character from "../components/Character";
import { getCharacter } from "../data";

export async function loader() {
	const character = await getCharacter(11);
	return character;
}

const Characters = () => {
	const character = useLoaderData();
	return (
		<Character
			id={character.id}
			name={character.name}
			status={character.status}
			species={character.species}
			gender={character.gender}
			location={character.location}
			image={character.image}
			
		/>
	)
}
export default Characters;