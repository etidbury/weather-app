import { Card, CardHeader, CardContent } from '@lib/ui/common';

/* eslint-disable-next-line */
export interface CardUnitBasicProps {
  title: string;
  value: string;
}

export function CardUnitBasic(props: CardUnitBasicProps) {
  return (
    <Card>
      <CardHeader className="text-center">{props.title}</CardHeader>
      <CardContent className="text-center">
        <span className="text-4xl">{props.value}</span>
      </CardContent>
    </Card>
  );
}

export default CardUnitBasic;
