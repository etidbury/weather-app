import { cn } from '@lib/util';
import { Button, ButtonProps } from '@lib/ui/common';

export interface ButtonRoundedProps extends ButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
}

export function ButtonRounded(props: ButtonRoundedProps) {
  return (
    <Button
      {...props}
      className={cn(
        props.className,
        'rounded-full',
        !props.isActive ? 'bg-rounded_button-inactive' : 'bg-rounded_button',
        'hover:bg-rounded_button',
        'text-rounded_button-foreground',
        'w-12',
        'h-12'
      )}
    >
      {props.children}
    </Button>
  );
}

export default ButtonRounded;
