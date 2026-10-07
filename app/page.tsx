import SectionRow from '@/components/common/section-row';
import Header from '@/components/sections/header';

export default function Home() {
  return (
    <>
      <Header />

      <main id="main" className="flex flex-1 flex-col">
        <SectionRow className="flex-1 border-b-0">
          <p className="font-mono text-sm text-muted-foreground">
            Portfolio in progress.
          </p>
        </SectionRow>
      </main>
    </>
  );
}
