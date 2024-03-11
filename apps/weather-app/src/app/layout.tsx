import { Capriola } from 'next/font/google';
import './global.css';

const capriola = Capriola({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Welcome to weather-app',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main
          className={[capriola.className, 'w-full', 'h-full', 'absolute'].join(
            ' '
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
