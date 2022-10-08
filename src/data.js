export async function getCharacters(page) {
	const response = await fetch(`https://rickandmortyapi.com/api/character/${page}`);
	const characters = (await response.json())
	return characters;
}
export async function getCharacter(id) {
	const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
	const character = (await response.json())
	return character;
}