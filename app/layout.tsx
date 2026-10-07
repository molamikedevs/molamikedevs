import { ThemeProvider } from 'next-themes';

import { jetbrainsMono, newsreader, schibsted } from '@/config/fonts';

import './globals.css';
export { metadata, viewport } from '@/config/site';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:font-medium focus:text-foreground"
          >
            Skip to content
          </a>

          <div className="flex flex-1 justify-center">
            <div
              aria-hidden="true"
              className="hatch hidden w-10 shrink-0 sm:block"
            />
            <div className="flex w-full max-w-page min-w-0 flex-col border-dashed sm:border-x">
              {children}
            </div>
            <div
              aria-hidden="true"
              className="hatch hidden w-10 shrink-0 sm:block"
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
