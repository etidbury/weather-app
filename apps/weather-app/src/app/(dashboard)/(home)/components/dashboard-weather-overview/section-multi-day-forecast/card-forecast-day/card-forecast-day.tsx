import { useMemo } from 'react';
import { formatDateEpochToFriendly } from '@lib/util';
import { Card, CardHeader, CardContent, CardFooter } from '@lib/ui/common';
import { IconWeather } from '@lib/ui/icon';
import { DashboardWeatherOverviewProps } from '../../dashboard-weather-overview';
import { TextTempUnit } from '@lib/ui/extended';

/* eslint-disable-next-line */
export interface CardForecastDayProps {
  weatherCondition: DashboardWeatherOverviewProps['weatherData']['days'][0];
  tempUnit: 'celcius' | 'fahrenheit';
}

export function CardForecastDay(props: CardForecastDayProps) {
  const forecastHeader = useMemo(() => {
    return formatDateEpochToFriendly(props.weatherCondition.datetimeEpoch);
  }, [props.weatherCondition.datetimeEpoch]);

  if (!props.tempUnit) {
    throw new Error('CardForecastDay: tempUnit prop is required');
  }

  return (
    <Card>
      <CardHeader>
        <span className="text-nowrap whitespace-nowrap text-center text-xl text-ellipsis overflow-hidden w-full">
          {forecastHeader}
        </span>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <IconWeather icon={props.weatherCondition.icon} size={200} />
        <span>{props.weatherCondition.conditions}</span>
      </CardContent>

      <CardFooter className="mt-3">
        <div className="flex justify-between w-full">
          <TextTempUnit
            temp={props.weatherCondition.tempmin}
            tempUnit={props.tempUnit}
          />
          <TextTempUnit
            temp={props.weatherCondition.tempmax}
            tempUnit={props.tempUnit}
            className="opacity-70"
          />
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardForecastDay;
