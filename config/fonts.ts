import {
  JetBrains_Mono,
  Newsreader,
  Schibsted_Grotesk,
} from 'next/font/google';

// Body and UI text.
export const schibsted = Schibsted_Grotesk({
  variable: '--font-schibsted',
  subsets: ['latin'],
  display: 'swap',
});

// Display name and the italic taglines beside section headings.
export const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
});

// Project descriptions, dates, counts and the footer.
export const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});
