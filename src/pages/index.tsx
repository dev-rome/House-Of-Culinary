import Hero from "@/components/Hero";
import NavMenu from "../components/navbar/NavMenu";
import Services from "../components/services-section/Services";

export default function Home() {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
