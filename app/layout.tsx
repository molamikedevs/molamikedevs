import { ThemeProvider } from 'next-themes';

import ChatWidget from '@/components/chat/chat-widget';
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
      <body className="relative isolate flex min-h-full flex-col">
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

          {/* Hatched texture behind the margin column, drawn once so the
              pattern runs unbroken down the whole page. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 hidden sm:block"
          >
            <div className="mx-auto h-full max-w-page">
              <div className="hatch h-full w-rail" />
            </div>
          </div>

          {children}

          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
