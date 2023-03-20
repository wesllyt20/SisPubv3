import axios from 'axios';

export interface DatosDeLaApi {
  idinst: number;
  test: string;
  image: string;
  colcir: string;
}

export async function obtenerDatosDeLaApi(): Promise<DatosDeLaApi[]> {
  const response = await axios.get<DatosDeLaApi[]>('http://localhost:3000/inst');
  return response.data;
}