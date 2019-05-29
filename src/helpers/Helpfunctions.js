import genresList from "../constants/genres";

const genresReduce = () =>
  genresList.reduce((acc, genre) => acc.concat(genre.name), []);

const replaceGenreNametoId = name =>
  genresList.find(genre => genre.name === name).id;

const sliceYear = value => value.slice(0, 4);
const changeGenre = number =>
  genresList.find(genre => genre.id === number).name;
export { genresReduce, replaceGenreNametoId, changeGenre, sliceYear };
