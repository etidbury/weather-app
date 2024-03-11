'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@lib/ui/common';
import { Button } from '@lib/ui/common';

export default function ErrorPage({
  searchParams,
  error,
}: {
  error: Error;
  searchParams?: {
    theme: string;
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
            <span className="error-message">Failed to load weather</span>
            <Link
              href={`/search?${new URLSearchParams(searchParams).toString()}`}
            >
              <Button>Back to Search</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
