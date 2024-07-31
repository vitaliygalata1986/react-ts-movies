import 'semantic-ui-css/semantic.min.css';
import styles from './MovieCard.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

export function MovieCard({ id, title, overview, popularity }: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.thumbnail} src="./movie-thumb.png" alt="" />
      <div className={styles.content}>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
        <span className={styles.overview}>{overview}</span>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  );
}
