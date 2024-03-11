import { ButtonRounded } from '@lib/ui/extended';
import OptionToggleTempUnit from './option-toggle-temp-unit/option-toggle-temp-unit';
import OptionToggleTheme from './option-toggle-theme/option-toggle-theme';

import { Search } from 'lucide-react';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface NavBarProps {
  searchParams: URLSearchParams;
}

export function NavBar(props: NavBarProps) {
  return (
    <div className="nav-bar py-5 flex justify-end gap-4">
      <Link
        href={`/search?${new URLSearchParams(props.searchParams).toString()}`}
        className="sm:hidden"
      >
        <ButtonRounded
          variant="default"
          size="icon"
          name="theme"
          className="text-xl font-bold"
          isActive={true}
        >
          <Search />
        </ButtonRounded>
      </Link>

      <OptionToggleTheme searchParams={props.searchParams} />
      <OptionToggleTempUnit searchParams={props.searchParams} />
    </div>
  );
}

export default NavBar;
