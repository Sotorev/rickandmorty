export async function getCharacters(query) {
	const res = await fetch(`https://rickandmortyapi.com/api/character/?${query}`);
	if (res.status === 404) {
		throw new Response("Not Found", { status: 404 });
	}
	const characters = (await res.json())
	return characters;
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
export async function getEpisodes(page) {
	const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
	const episodes = (await response.json())
	return episodes.results;
}