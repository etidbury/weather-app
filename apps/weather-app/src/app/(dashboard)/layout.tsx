'use client';
import { ThemeProvider } from 'next-themes';
import { useSearchParams } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  return (
    <ThemeProvider
      attribute="class"
      themes={['dark', 'light']}
      defaultTheme="dark"
      forcedTheme={searchParams?.get('theme') ?? undefined}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
