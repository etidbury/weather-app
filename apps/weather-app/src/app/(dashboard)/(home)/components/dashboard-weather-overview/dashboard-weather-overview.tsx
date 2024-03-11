import { WeatherResponse } from '@lib/sdk/weather-api';
import { Card } from '@lib/ui/common';
import NavBar from './nav-bar/nav-bar';
import SectionBreakdown from './section-breakdown/section-breakdown';
import SectionMultiDayForecast from './section-multi-day-forecast/section-multi-day-forecast';
import SideBar from './side-bar/side-bar';
import WeatherDayHero from './weather-day-hero/weather-day-hero';

export interface DashboardWeatherOverviewProps {
  weatherData: Zod.infer<typeof WeatherResponse>;
  tempUnit: 'celcius' | 'fahrenheit';
  searchParams: URLSearchParams;
}

export function DashboardWeatherOverview(props: DashboardWeatherOverviewProps) {
  if (!props.tempUnit) {
    throw new Error('DashboardWeatherOverview: tempUnit prop is required');
  }

  return (
    <div className="dashboard-weather-overview grid grid-cols-12 h-full w-full items-start">
      <div className="hidden lg:block lg:col-span-3 h-full">
        <SideBar
          weatherData={props.weatherData}
          searchParams={props.searchParams}
          tempUnit={props.tempUnit}
        />
      </div>
      <article className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-y-10 items-start px-5 lg:px-10 xl:px-20 2xl:px-30">
        <NavBar searchParams={props.searchParams} />

        <Card className="p-12 light:bg-foreground lg:hidden">
          <WeatherDayHero
            weatherData={props.weatherData}
            tempUnit={props.tempUnit}
          />
        </Card>

        <h1 className="text-4xl font-bold">Day Overview</h1>
        <SectionBreakdown
          tempUnit={props.tempUnit}
          weatherData={props.weatherData}
        />
        <SectionMultiDayForecast
          forecastDays={props.weatherData?.days ?? []}
          tempUnit={props.tempUnit}
        />
      </article>
    </div>
  );
}

export default DashboardWeatherOverview;
