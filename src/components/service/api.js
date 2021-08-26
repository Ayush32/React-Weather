import axios from "axios";

const URL = 'api.openweathermap.org/data/2.5/weather'
const API_KEY = '2363f96dd5881dae7c7f6acbc0c1a9ef';
export const getData = () => {
    return axios.get(`$"{URL}?q=mumbai,india&appid=${API_KEY}&units=metric`)
}