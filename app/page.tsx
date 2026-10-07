import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <section className="border-b border-dashed px-5 py-10 sm:px-8">
        <h1 className="font-serif text-4xl tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-1 text-muted-foreground">{siteConfig.role}</p>
      </section>

      <section className="px-5 py-8 sm:px-8">
        <p className="font-mono text-sm text-muted-foreground">
          Portfolio in progress.
        </p>
      </section>
    </main>
  );
}
