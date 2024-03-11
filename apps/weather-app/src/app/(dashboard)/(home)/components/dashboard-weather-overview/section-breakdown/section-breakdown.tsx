import { DashboardWeatherOverviewProps } from '../dashboard-weather-overview';
import CardUnitPercentage from './card-unit-percentage/card-unit-percentage';

/* eslint-disable-next-line */
export interface SectionBreakdownProps {
  currentConditions: DashboardWeatherOverviewProps['weatherData']['currentConditions'];
}

export function SectionBreakdown(props: SectionBreakdownProps) {
  return (
    <section className="section-breakdown grid grid-cols-2 gap-4 items-start">
      <CardUnitPercentage
        title={'Humidity'}
        percentageValue={props.currentConditions.humidity}
      />
      <CardUnitPercentage
        title={'Cloud Cover'}
        percentageValue={props.currentConditions.cloudcover}
      />
    </section>
  );
}

export default SectionBreakdown;
