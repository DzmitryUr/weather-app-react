import axios from 'axios';

const weatherUrl = 'https://api.openweathermap.org/data/2.5';
const currentWeatherUrl = `${weatherUrl}/weather`;
const forecastWeatherUrl = `${weatherUrl}/forecast`;

export const weatherIconUrl = 'https://openweathermap.org/img/wn/';

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeatherByCoords = async (geoData, units) => {
  if (!geoData?.latitude || !geoData?.longitude) return;

  const params = {
    lat: geoData.latitude,
    lon: geoData.longitude,
    units,
    appid: apiKey,
  };

  const [curent, forecast] = await Promise.all([
    axios.get(currentWeatherUrl, { params }),
    axios.get(forecastWeatherUrl, { params }),
  ]);

  return { currentWeather: curent.data, forecast: forecast.data };
};

export const fetchWeatherByCity = async (searchQuery, units) => {
  if (!searchQuery) return;

  const params = {
    q: searchQuery,
    units,
    appid: apiKey,
  };

  const [curent, forecast] = await Promise.all([
    axios.get(currentWeatherUrl, { params }),
    axios.get(forecastWeatherUrl, { params }),
  ]);

  return { currentWeather: curent.data, forecast: forecast.data };
};
