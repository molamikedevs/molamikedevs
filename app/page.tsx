import About from '@/components/sections/about';
import Activity from '@/components/sections/activity';
import Contact from '@/components/sections/contact';
import Header from '@/components/sections/header';
import Projects from '@/components/sections/projects';
import Stack from '@/components/sections/stack';

export default function Home() {
  return (
    <>
      <Header />

      <main id="main" className="flex flex-1 flex-col">
        <About />
        <Projects />
        <Activity />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
