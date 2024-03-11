import { useMemo } from 'react';
import { formatDateEpochToFriendly } from '@lib/util';
import { IconWeather, WEATHER_ICONS } from '@lib/ui/icon';
import { DashboardWeatherOverviewProps } from '../dashboard-weather-overview';
import { TextTempUnit } from '@lib/ui/extended';

export interface WeatherDayHeroProps {
  weatherData: DashboardWeatherOverviewProps['weatherData'];
  tempUnit: 'celcius' | 'fahrenheit';
}

export function WeatherDayHero(props: WeatherDayHeroProps) {
  const currentConditionsTimeFriendly = useMemo(() => {
    return formatDateEpochToFriendly(
      props.weatherData.currentConditions.datetimeEpoch
    );
  }, [props.weatherData.currentConditions.datetimeEpoch]);

  const addressFriendly = useMemo(() => {
    return props.weatherData.resolvedAddress.split(',')[0];
  }, [props.weatherData.resolvedAddress]);

  return (
    <div className="grid grid-cols-1 gap-y-4 text-center w-full">
      <h1 className="text-3xl" title={props.weatherData.resolvedAddress}>
        {addressFriendly}
      </h1>
      <h2 className="text-2xl">{currentConditionsTimeFriendly}</h2>
      <div className="flex justify-center items-center">
        <IconWeather icon={WEATHER_ICONS.CLOUDY_DAY_1} size={400} />
      </div>

      <TextTempUnit
        className={`text-5xl`}
        temp={props.weatherData.currentConditions.temp}
        tempUnit={props.tempUnit}
      />

      <span className="text-xl">
        {props.weatherData.currentConditions.description}
      </span>
    </div>
  );
}

export default WeatherDayHero;
