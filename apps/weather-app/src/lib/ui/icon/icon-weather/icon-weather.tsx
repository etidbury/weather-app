import Image from 'next/image';

import CLOUDY_DAY_1 from './img/icon/weather/svg/cloudy-day-1.svg';
import CLOUDY_DAY_2 from './img/icon/weather/svg/cloudy-day-2.svg';
import CLOUDY_DAY_3 from './img/icon/weather/svg/cloudy-day-3.svg';
import CLOUDY_NIGHT_1 from './img/icon/weather/svg/cloudy-night-1.svg';
import CLOUDY_NIGHT_2 from './img/icon/weather/svg/cloudy-night-2.svg';
import CLOUDY_NIGHT_3 from './img/icon/weather/svg/cloudy-night-3.svg';
import CLOUDY from './img/icon/weather/svg/cloudy.svg';
import DAY from './img/icon/weather/svg/day.svg';
import NIGHT from './img/icon/weather/svg/night.svg';
import RAINY_1 from './img/icon/weather/svg/rainy-1.svg';
import RAINY_2 from './img/icon/weather/svg/rainy-2.svg';
import RAINY_3 from './img/icon/weather/svg/rainy-3.svg';
import RAINY_4 from './img/icon/weather/svg/rainy-4.svg';
import RAINY_5 from './img/icon/weather/svg/rainy-5.svg';
import RAINY_6 from './img/icon/weather/svg/rainy-6.svg';
import RAINY_7 from './img/icon/weather/svg/rainy-7.svg';
import SNOWY_1 from './img/icon/weather/svg/snowy-1.svg';
import SNOWY_2 from './img/icon/weather/svg/snowy-2.svg';
import SNOWY_3 from './img/icon/weather/svg/snowy-3.svg';
import SNOWY_4 from './img/icon/weather/svg/snowy-4.svg';
import SNOWY_5 from './img/icon/weather/svg/snowy-5.svg';
import SNOWY_6 from './img/icon/weather/svg/snowy-6.svg';
import THUNDER from './img/icon/weather/svg/thunder.svg';

export const WEATHER_ICONS = {
  CLOUDY_DAY_1,
  CLOUDY_DAY_2,
  CLOUDY_DAY_3,
  CLOUDY_NIGHT_1,
  CLOUDY_NIGHT_2,
  CLOUDY_NIGHT_3,
  CLOUDY,
  DAY,
  NIGHT,
  RAINY_1,
  RAINY_2,
  RAINY_3,
  RAINY_4,
  RAINY_5,
  RAINY_6,
  RAINY_7,
  SNOWY_1,
  SNOWY_2,
  SNOWY_3,
  SNOWY_4,
  SNOWY_5,
  SNOWY_6,
  THUNDER,
};

export interface IconWeatherProps {
  icon: keyof typeof WEATHER_ICONS;
  size: number;
}

export function IconWeather(props: IconWeatherProps) {
  return (
    <div className={'icon-weather'}>
      <Image src={DAY} alt={'Day'} width={props.size} height={props.size} />
    </div>
  );
}

export default IconWeather;
