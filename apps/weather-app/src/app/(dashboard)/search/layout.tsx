import { Card, CardContent, CardHeader } from '@lib/ui/common';

export default function LocationSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Card>
        <CardHeader>
          <h1 className="text-3xl">Location Search</h1>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
