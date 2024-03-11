'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@lib/util';

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    progressBarColor: 'green' | 'yellow';
  }
>(({ className, progressBarColor, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      `relative h-2 w-full overflow-hidden rounded-full dark:bg-white bg-slate-200`,
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        `h-full w-full flex-1  transition-all`,
        progressBarColor === 'green' ? 'bg-green' : 'bg-yellow'
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
ProgressBar.displayName = ProgressPrimitive.Root.displayName;

export { ProgressBar };
