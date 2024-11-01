import { useQuery } from '@tanstack/react-query';
import { fetchWeatherByCity, fetchWeatherByCoords } from '../services/api';
import { useMetrics } from './useMetrics';

export function useFetchWeather(geoData, searchQuery) {
  const { metrics } = useMetrics();
  const { units } = metrics;
  return useQuery({
    queryKey: ['weather', searchQuery || geoData, units],
    queryFn: () =>
      searchQuery
        ? fetchWeatherByCity(searchQuery, units)
        : fetchWeatherByCoords(geoData, units),
    enabled: (!!geoData?.latitude && !!geoData?.longitude) || !!searchQuery,
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });
}
