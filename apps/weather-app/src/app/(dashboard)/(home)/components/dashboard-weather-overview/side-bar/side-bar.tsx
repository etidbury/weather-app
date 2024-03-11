import { DashboardWeatherOverviewProps } from '../dashboard-weather-overview';
import { InputSearch } from '@lib/ui/extended';
import WeatherDayHero from '../weather-day-hero/weather-day-hero';
import { queryWeather } from '@lib/actions';
/* eslint-disable-next-line */
export interface SideBarProps {
  weatherData: DashboardWeatherOverviewProps['weatherData'];
  searchParams: URLSearchParams;
  tempUnit: 'celcius' | 'fahrenheit';
}

export function SideBar(props: SideBarProps) {
  return (
    <aside className="w-full h-full bg-sidebar flex flex-col items-start gap-y-14 p-5">
      <InputSearch searchParams={props.searchParams} action={queryWeather} />
      <WeatherDayHero
        weatherData={props.weatherData}
        tempUnit={props.tempUnit}
      />
    </aside>
  );
}

export default SideBar;
