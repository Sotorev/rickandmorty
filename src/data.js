export async function getCharacters(page) {
	const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
	const characters = (await response.json())
	return characters.results;
}
export async function getCharacter(id) {
	const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
	const character = (await response.json())
	return character;
}
export async function getLocations(query) {
	const response = await fetch(`https://rickandmortyapi.com/api/location`);
	const locations = (await response.json())
	return locations;
}
export async function getEpisodes(query) {
	const response = await fetch(`https://rickandmortyapi.com/api/episode`);
	const episodes = (await response.json())
	return episodes;
}