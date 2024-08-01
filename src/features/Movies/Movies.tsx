import { Link } from 'react-router-dom';
import { Movie } from '../../reducers/movies'; // импортируем интерфейс Movie для типизации данных фильма
import { MovieCard } from './MovieCard';
import { connect } from 'react-redux'; // : используется для подключения компонента к Redux-хранилищу
import { RootState } from '../../store'; // импортируем тип корневого состояния Redux-хранилища
import styles from './Movies.module.scss';
import { useEffect, useState } from 'react';
import { client, MovieDetails } from '../../api/tmdb';

export function MoviesFetch() {
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  console.log(movies);

  useEffect(() => {
    async function loadData() {
      const config = await client.getConfiguration();
      const imageUrl = config.images.base_url; // базовый url с изображением
      // console.lo ('imageUrl', imageUrl); // http://image.tmdb.org/t/p/

      const results = await client.getNowPlaying();
      // console.log(results);

      const mappedResults: Movie[] = results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        popularity: movie.popularity,
        image: movie.backdrop_path
          ? `${imageUrl}w780${movie.backdrop_path}`
          : undefined,
      })); // возвращаем отфильтрованный объект с фильмом

      setMovies(mappedResults);
    }
    loadData();
  }, []);

  return <Movies movies={movies} />;
}

// Определяем интерфейс для пропсов:
interface Props {
  movies: Movie[];
}

// Props: интерфейс, который описывает пропсы, ожидаемые компонентом Movies. В данном случае это массив фильмов movies.

function Movies({ movies }: Props) {
  // const movies = props.movies;
  return (
    <section>
      <div className={styles.list}>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            overview={m.overview}
            popularity={m.popularity}
            image={m.image}
          />
        ))}
      </div>
    </section>
  );
}

// const mapStateToProps = (state: RootState) => ({
//   // извлекает массив фильмов из состояния Redux
//   movies: state.movies.top,
// });

/*
  mapStateToProps: функция, которая принимает текущее состояние Redux-хранилища (state) и возвращает объект, 
  который будет передан компоненту Movies как пропсы. 
  В данном случае из состояния извлекается массив фильмов top из раздела movies.
*/

//const connector = connect(mapStateToProps); // Соединяет компонент Movies с Redux-хранилищем с помощью функции connect

/*
connector: создается с помощью функции connect, принимающей mapStateToProps и возвращающей функцию, которая соединяет компонент с Redux-хранилищем.
*/

/*
Экспортируем компонент Movies, обернутый в коннектор. Это позволяет компоненту Movies получать данные из Redux-хранилища через пропсы.
*/

//export default connector(Movies);

// итак
/*
Определяет компонент Movies, который рендерит список фильмов.
Определяет функцию mapStateToProps, которая извлекает массив фильмов из состояния Redux.
Соединяет компонент Movies с Redux-хранилищем с помощью функции connect.
Экспортирует подключенный компонент.
*/
