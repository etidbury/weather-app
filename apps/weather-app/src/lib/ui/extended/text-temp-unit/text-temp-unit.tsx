import { HTMLAttributes, useMemo } from 'react';

export interface TextTempUnitProps {
  tempUnit: 'celcius' | 'fahrenheit';
  temp: number;
  className?: HTMLAttributes<HTMLSpanElement>['className'];
}

export function TextTempUnit(props: TextTempUnitProps) {
  if (!props.tempUnit) {
    throw new Error('TextTempUnit: tempUnit prop is required');
  }
  const tempUnitText = useMemo(() => {
    return props.tempUnit === 'celcius' ? '°C' : '°F';
  }, [props.tempUnit]);
  return (
    <span className={props.className}>
      <span className="font-bold">{props.temp}</span>
      <span className="dark:text-gray-50">{tempUnitText}</span>
    </span>
  );
}

export default TextTempUnit;
