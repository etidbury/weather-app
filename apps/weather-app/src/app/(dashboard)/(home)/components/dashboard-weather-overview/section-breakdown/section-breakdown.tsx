import { TextTempUnit } from '@lib/ui/extended';
import { DashboardWeatherOverviewProps } from '../dashboard-weather-overview';
import CardUnitBasic from './card-unit-basic/card-unit-basic';
import CardUnitPercentage from './card-unit-percentage/card-unit-percentage';
import { useMemo } from 'react';
import { formatDateEpochToTimeFriendly } from 'src/lib/util/time';

/* eslint-disable-next-line */
export interface SectionBreakdownProps {
  tempUnit: 'celcius' | 'fahrenheit';
  weatherData: DashboardWeatherOverviewProps['weatherData'];
}

export function SectionBreakdown(props: SectionBreakdownProps) {
  const todayConditions = useMemo(() => {
    return props.weatherData.days[0];
  }, [props.weatherData.days]);

  const sunriseFormattedTime = useMemo(() => {
    return formatDateEpochToTimeFriendly(todayConditions.sunriseEpoch);
  }, [todayConditions.sunriseEpoch]);

  const sunsetFormattedTime = useMemo(() => {
    return formatDateEpochToTimeFriendly(todayConditions.sunsetEpoch);
  }, [todayConditions.sunsetEpoch]);

  return (
    <section className="section-breakdown ">
      <div className="grid grid-cols-2 gap-10 items-start">
        <CardUnitPercentage
          title={'Humidity'}
          percentageValue={props.weatherData.currentConditions.humidity}
        />
        <CardUnitPercentage
          title={'Cloud Cover'}
          percentageValue={props.weatherData.currentConditions.cloudcover}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 py-10">
        <CardUnitBasic title={'Min temp.'}>
          <TextTempUnit temp={todayConditions.tempmin} tempUnit={'celcius'} />
        </CardUnitBasic>
        <CardUnitBasic title={'Max temp.'}>
          <TextTempUnit temp={todayConditions.tempmax} tempUnit={'celcius'} />
        </CardUnitBasic>

        <CardUnitBasic title={'Sunrise'}>
          <span className="">{sunriseFormattedTime}</span>
        </CardUnitBasic>
        <CardUnitBasic title={'Sunset'}>
          <span className="">{sunsetFormattedTime}</span>
        </CardUnitBasic>
      </div>
    </section>
  );
}

export default SectionBreakdown;
