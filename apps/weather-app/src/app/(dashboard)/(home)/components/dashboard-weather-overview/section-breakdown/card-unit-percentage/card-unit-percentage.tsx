import { useMemo } from 'react';
import { Card, CardHeader, CardContent, ProgressBar } from '@lib/ui/common';

/* eslint-disable-next-line */
export interface CardUnitPercentageProps {
  title: string;
  percentageValue: number;
  progressBarColor: 'green' | 'yellow';
}

export function CardUnitPercentage(props: CardUnitPercentageProps) {
  const percentageWholeValue = useMemo<number>(() => {
    return Math.round(props.percentageValue);
  }, [props.percentageValue]);
  return (
    <Card>
      <CardHeader className="text-center">{props.title}</CardHeader>
      <CardContent className="text-center">
        <span className="text-4xl">{percentageWholeValue}%</span>
        <div className="flex flex-col">
          <div className="flex justify-end">
            <span>%</span>
          </div>
          <ProgressBar
            value={props.percentageValue}
            progressBarColor={props.progressBarColor}
          />

          <div className="flex justify-between">
            <span className="mr-2">0</span>
            <span className="ml-auto">100</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardUnitPercentage;
