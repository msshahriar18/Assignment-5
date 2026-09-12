import { Suspense, useState } from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Technologies from "./components/Technologies";
import type { ITechnology } from "./types/technology";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<h2>Loading.......</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  )
}

export default App
