import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const redCollar = localFont({
  src: '../shared/assets/fonts/Redcollar.woff',
  variable: '--font-red-collar',
  weight: '400',
});

const ttCommons = localFont({
  src: '../shared/assets/fonts/TTCommons-Regular.woff',
  variable: '--font-tt-commons',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'event planner',
  description: '<3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${redCollar.variable} ${ttCommons.variable}`}>{children}</body>
    </html>
  );
}
