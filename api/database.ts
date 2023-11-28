export const getAllCharacters = async (page: number) => {
  const api = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const characterApi = await api.json();
  return characterApi;
};
