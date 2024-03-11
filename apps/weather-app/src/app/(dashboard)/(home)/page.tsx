import { fetchWeather } from '@lib/sdk/weather-api';
import { DashboardWeatherOverview } from './components/dashboard-weather-overview/dashboard-weather-overview';
import { DEFAULT_LOCATION, DEFAULT_TEMP_UNIT } from '@lib/config';

export default async function HomePage({
  searchParams,
}: {
  searchParams?: {
    location: string;
    unit: 'celcius' | 'fahrenheit';
  };
}) {
  const querySearchLocation = searchParams?.location?.length
    ? searchParams?.location
    : DEFAULT_LOCATION;

  const querySearchUnit = searchParams?.unit ?? DEFAULT_TEMP_UNIT;

  const weatherData = await fetchWeather({
    unit: querySearchUnit,
    location: querySearchLocation,
  });

  return (
    <DashboardWeatherOverview
      weatherData={weatherData}
      tempUnit={querySearchUnit}
      searchParams={new URLSearchParams(searchParams)}
    />
  );
}
