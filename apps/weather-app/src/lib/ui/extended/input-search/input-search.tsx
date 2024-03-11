'use server';

import { FormHTMLAttributes } from 'react';

import { Input } from '@lib/ui/common';
import { IconArrowRight } from '@lib/ui/icon';
import { ButtonRounded } from '@lib/ui/extended';

export interface InputSearchProps {
  action: FormHTMLAttributes<HTMLFormElement>['action'];
  searchParams: URLSearchParams;
}

export function InputSearch(props: InputSearchProps) {
  return (
    <form
      className="flex justify-end gap-2 w-full"
      action={props.action}
      method="get"
    >
      <input
        type="hidden"
        name="unit"
        value={props.searchParams.get('unit') ?? 'celcius'}
      />
      <Input
        name="location"
        placeholder="Search"
        className="bg-white text-black h-12 text-xl mr-2 w-full"
      />
      <div>
        <ButtonRounded
          variant="default"
          size={'icon'}
          isActive={true}
          type="submit"
        >
          <IconArrowRight alt="Search" width={20} />
        </ButtonRounded>
      </div>
    </form>
  );
}
