'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@lib/ui/common';
import { Button } from '@lib/ui/common';

export default function ErrorPage({
  searchParams,
  error,
}: {
  error: any;
  searchParams?: {
    location: string;
    unit: 'celcius' | 'fahrenheit';
  };
}) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Card>
        <CardHeader>
          <h1 className="text-3xl">Error</h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <span className="error-message">
              {error.message ?? 'An unknown error occurred'}
            </span>
            <Link href="/search">
              <Button>Search again</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
