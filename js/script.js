"use sctrict";

// 1.
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


// 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3
const lastFilm1 = prompt('Один из последних просмотренных фильмов?',''),
    filmEval1 = prompt('На сколько оцените его?',''),
    lastFilm2 = prompt('Один из последних просмотренных фильмов?',''),
    filmEval2 = prompt('На сколько оцените его?','');

personalMovieDB.movies[lastFilm1] = filmEval1;
personalMovieDB.movies[lastFilm2] = filmEval2;

console.log(personalMovieDB);