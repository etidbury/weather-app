import { InputSearch } from '@lib/ui/extended';
import OptionToggleTempUnit from './option-toggle-temp-unit/option-toggle-temp-unit';
import OptionToggleTheme from './option-toggle-theme/option-toggle-theme';
import { queryWeather } from '@lib/actions';

/* eslint-disable-next-line */
export interface NavBarProps {
  searchParams: URLSearchParams;
}

export function NavBar(props: NavBarProps) {
  return (
    <div className="nav-bar py-5 flex justify-end gap-6">
      <div className="w-96 lg:hidden">
        <InputSearch searchParams={props.searchParams} action={queryWeather} />
      </div>
      <OptionToggleTheme searchParams={props.searchParams} />
      <OptionToggleTempUnit searchParams={props.searchParams} />
    </div>
  );
}

export default NavBar;
