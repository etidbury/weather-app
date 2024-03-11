import CardForecastDay from './card-forecast-day/card-forecast-day';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@lib/ui/common';

import { formatDateEpochToFriendly } from '@lib/util';
import { useMemo } from 'react';
import { DashboardWeatherOverviewProps } from '../dashboard-weather-overview';

export interface SectionMultiDayForecastProps {
  forecastDays: DashboardWeatherOverviewProps['weatherData']['days'];
  tempUnit: 'celcius' | 'fahrenheit';
}

export function SectionMultiDayForecast(props: SectionMultiDayForecastProps) {
  const forecastDaysFormatted = useMemo(() => {
    return props.forecastDays.slice(1, 6).map((forecastDay, index) => ({
      ...forecastDay,
      header: formatDateEpochToFriendly(forecastDay.datetimeEpoch),
    }));
  }, [props.forecastDays]);

  if (!props.tempUnit) {
    throw new Error('SectionMultiDayForecast: tempUnit prop is required');
  }

  return (
    <section className="section-multi-day-forecast pb-5">
      <Carousel>
        <CarouselContent>
          {forecastDaysFormatted.map((forecastDay, index) => {
            return (
              <CarouselItem key={index} className="sm:basis-1/3 lg:basis-1/5">
                <CardForecastDay
                  weatherCondition={forecastDay}
                  tempUnit={props.tempUnit}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-2 lg:hidden" />
        <CarouselNext className="right-2 lg:hidden" />
      </Carousel>
    </section>
  );
}

export default SectionMultiDayForecast;
