import { ButtonRounded } from '@lib/ui/extended';
import { Lightbulb } from 'lucide-react';

/* eslint-disable-next-line */
export interface OptionToggleThemeProps {
  searchParams: URLSearchParams;
}

export function OptionToggleTheme(props: OptionToggleThemeProps) {
  const searchParamsTheme = props.searchParams.get('theme');

  return (
    <form action={'/'}>
      <input
        type="hidden"
        name="location"
        value={props.searchParams.get('location') ?? ''}
      />

      <input
        type="hidden"
        name="unit"
        value={props.searchParams.get('unit') ?? ''}
      />

      <ButtonRounded
        variant="default"
        size="icon"
        name="theme"
        value={
          !searchParamsTheme || searchParamsTheme === 'dark' ? 'light' : 'dark'
        }
        type="submit"
        className="text-xl font-bold"
        isActive={searchParamsTheme === 'light'}
      >
        <Lightbulb />
      </ButtonRounded>
    </form>
  );
}

export default OptionToggleTheme;
