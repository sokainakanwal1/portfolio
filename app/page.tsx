import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Ticker from "./_components/Ticker";
import Manifesto from "./_components/Manifesto";
import Work from "./_components/Work";
import Interlude from "./_components/Interlude";
import Capabilities from "./_components/Capabilities";
import Process from "./_components/Process";
import Stats from "./_components/Stats";
import Experience from "./_components/Experience";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <Hero />
        <Ticker />
        <Manifesto />
        <Work />
        <Interlude />
        <Capabilities />
        <Process />
        <Stats />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
