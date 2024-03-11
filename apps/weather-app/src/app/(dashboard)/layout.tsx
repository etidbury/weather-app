'use client';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      themes={['dark', 'light']}
      defaultTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
}
