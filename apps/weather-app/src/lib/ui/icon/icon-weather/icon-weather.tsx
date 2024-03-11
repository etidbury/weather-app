import Image from 'next/image';

import CLOUDY_DAY_1 from './img/icon/weather/svg/cloudy-day-1.svg';
// import CLOUDY_DAY_2 from './img/icon/weather/svg/cloudy-day-2.svg';
// import CLOUDY_DAY_3 from './img/icon/weather/svg/cloudy-day-3.svg';
import CLOUDY_NIGHT_1 from './img/icon/weather/svg/cloudy-night-1.svg';
// import CLOUDY_NIGHT_2 from './img/icon/weather/svg/cloudy-night-2.svg';
// import CLOUDY_NIGHT_3 from './img/icon/weather/svg/cloudy-night-3.svg';
import CLOUDY from './img/icon/weather/svg/cloudy.svg';
import DAY from './img/icon/weather/svg/day.svg';
import NIGHT from './img/icon/weather/svg/night.svg';
import RAINY_1 from './img/icon/weather/svg/rainy-1.svg';
// import RAINY_2 from './img/icon/weather/svg/rainy-2.svg';
// import RAINY_3 from './img/icon/weather/svg/rainy-3.svg';
// import RAINY_4 from './img/icon/weather/svg/rainy-4.svg';
// import RAINY_5 from './img/icon/weather/svg/rainy-5.svg';
// import RAINY_6 from './img/icon/weather/svg/rainy-6.svg';
// import RAINY_7 from './img/icon/weather/svg/rainy-7.svg';
import SNOWY_1 from './img/icon/weather/svg/snowy-1.svg';
// import SNOWY_2 from './img/icon/weather/svg/snowy-2.svg';
// import SNOWY_3 from './img/icon/weather/svg/snowy-3.svg';
// import SNOWY_4 from './img/icon/weather/svg/snowy-4.svg';
// import SNOWY_5 from './img/icon/weather/svg/snowy-5.svg';
// import SNOWY_6 from './img/icon/weather/svg/snowy-6.svg';
import THUNDER from './img/icon/weather/svg/thunder.svg';

const MAP_API_ICON_TO_WEATHER_ICON: Record<string, string> = {
  snow: SNOWY_1,
  'snow-showers-day': SNOWY_1,
  'snow-showers-night': SNOWY_1,
  'thunder-rain': RAINY_1,
  'thunder-showers-day': THUNDER,
  'thunder-showers-night': THUNDER,
  rain: RAINY_1,
  'showers-day': RAINY_1,
  'showers-night': RAINY_1,
  fog: CLOUDY,
  wind: DAY, // Used DAY here as a placeholder, there's no direct match for wind.
  cloudy: CLOUDY,
  'partly-cloudy-day': CLOUDY_DAY_1,
  'partly-cloudy-night': CLOUDY_NIGHT_1,
  'clear-day': DAY,
  'clear-night': NIGHT,
};

export interface IconWeatherProps {
  icon: keyof typeof MAP_API_ICON_TO_WEATHER_ICON;
  size: number;
}

export function IconWeather(props: IconWeatherProps) {
  const foundIcon = MAP_API_ICON_TO_WEATHER_ICON[props.icon];

  if (!foundIcon) {
    throw new Error(`IconWeather: icon ${props.icon} not found`);
  }

  return (
    <div className={'icon-weather'}>
      <Image
        src={foundIcon}
        alt={props.icon}
        width={props.size}
        height={props.size}
      />
    </div>
  );
}

export default IconWeather;
