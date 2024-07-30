import { Link } from 'react-router-dom';
import { Movie } from '../../reducers/movies'; // импортируем интерфейс Movie для типизации данных фильма
import { MovieCard } from './MovieCard';
import { connect } from 'react-redux'; // : используется для подключения компонента к Redux-хранилищу
import { RootState } from '../../store'; // импортируем тип корневого состояния Redux-хранилища

// Определяем интерфейс для пропсов:
interface Props {
  movies: Movie[];
}

// Props: интерфейс, который описывает пропсы, ожидаемые компонентом Movies. В данном случае это массив фильмов movies.

function Movies({ movies }: Props) {
  return (
    <section>
      <div className="Movies-list">
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            overview={m.overview}
            popularity={m.popularity}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  // извлекает массив фильмов из состояния Redux
  movies: state.movies.top,
});

/*
  mapStateToProps: функция, которая принимает текущее состояние Redux-хранилища (state) и возвращает объект, 
  который будет передан компоненту Movies как пропсы. 
  В данном случае из состояния извлекается массив фильмов top из раздела movies.
*/

const connector = connect(mapStateToProps); // Соединяет компонент Movies с Redux-хранилищем с помощью функции connect

/*
connector: создается с помощью функции connect, принимающей mapStateToProps и возвращающей функцию, которая соединяет компонент с Redux-хранилищем.
*/

/*
Экспортируем компонент Movies, обернутый в коннектор. Это позволяет компоненту Movies получать данные из Redux-хранилища через пропсы.
*/

export default connector(Movies);

// итак
/*
Определяет компонент Movies, который рендерит список фильмов.
Определяет функцию mapStateToProps, которая извлекает массив фильмов из состояния Redux.
Соединяет компонент Movies с Redux-хранилищем с помощью функции connect.
Экспортирует подключенный компонент.
*/
