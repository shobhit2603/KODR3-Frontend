import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reclaim from "./components/Reclaim";
import Trusted from "./components/Trusted";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Reclaim />
      <Trusted />
    </main>
  )
}
