import Header from '@/components/sections/header';

export default function Home() {
  return (
    <>
      <Header />

      <main id="main" className="flex flex-1 flex-col">
        <section className="px-5 py-8 sm:px-8">
          <p className="font-mono text-sm text-muted-foreground">
            Portfolio in progress.
          </p>
        </section>
      </main>
    </>
  );
}
