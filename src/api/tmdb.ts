import { Await } from 'react-router-dom';
import configuration from '../configuration';

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${configuration.apiToken}`,
    }, // передаем токен Bearer
  };
  const response = await fetch(
    `${configuration.apiUrl}/3${relativeUrl}`,
    options
  );
  const json: TBody = await response.json();
  return json;
}

export interface MovieDetails {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  backdrop_path?: string;
}

interface PageResponse<TResult> {
  page: number; // в API, в котором мы работаем есть свойство page
  results: TResult[]; // в API, в котором мы работаем есть свойство results
}

interface Configuration {
  // интерфейс, который определяет базовы путь к изображениям
  images: {
    base_url: string;
  };
}

export const client = {
  async getConfiguration() {
    return get<Configuration>('/configuration');
  },

  async getNowPlaying(): Promise<MovieDetails[]> {
    const response = await get<PageResponse<MovieDetails>>(
      '/movie/now_playing?page=1'
    );
    return response.results;
  },
};
