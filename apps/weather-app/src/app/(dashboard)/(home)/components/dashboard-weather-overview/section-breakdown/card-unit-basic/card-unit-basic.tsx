import { Card, CardHeader, CardContent } from '@lib/ui/common';

/* eslint-disable-next-line */
export interface CardUnitBasicProps {
  title: string;
  children: React.ReactNode;
}

export function CardUnitBasic(props: CardUnitBasicProps) {
  return (
    <Card className="py-6">
      <CardHeader className="text-center">{props.title}</CardHeader>
      <CardContent className="text-center text-4xl">
        {props.children}
      </CardContent>
    </Card>
  );
}

export default CardUnitBasic;
