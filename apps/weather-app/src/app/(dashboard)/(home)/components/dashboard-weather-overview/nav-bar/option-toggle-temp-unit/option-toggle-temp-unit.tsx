import { queryWeather } from '@lib/actions';
import { ButtonRounded } from '@lib/ui/extended';

/* eslint-disable-next-line */
export interface OptionToggleTempUnitProps {
  searchParams: URLSearchParams;
}

export function OptionToggleTempUnit(props: OptionToggleTempUnitProps) {
  const searchParamsUnit = props.searchParams.get('unit');

  return (
    <form className="grid grid-cols-2 gap-4" action={queryWeather}>
      <input
        type="hidden"
        name="location"
        value={props.searchParams.get('location') ?? ''}
      />

      <ButtonRounded
        variant="default"
        size="icon"
        isActive={!searchParamsUnit || searchParamsUnit === 'celcius'}
        name="unit"
        value={'celcius'}
        type="submit"
        className="text-xl font-bold"
      >
        °C
      </ButtonRounded>
      <ButtonRounded
        variant="default"
        size="icon"
        isActive={searchParamsUnit === 'fahrenheit'}
        name="unit"
        value={'fahrenheit'}
        type="submit"
        className="text-xl font-bold"
      >
        °F
      </ButtonRounded>
    </form>
  );
}

export default OptionToggleTempUnit;
