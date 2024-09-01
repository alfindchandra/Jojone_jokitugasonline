import Abote from "./abote";
import { Footer } from "./Footer";
import Hero from "./hero";
import Home from "./home";
import { Instagram } from "./Instagram";
import Logo from "./Logo";
import { Metrics } from "./Metrics";
import { Order } from "./Order";

export default function home() {
  return (
    <main className="w-full h-screen">
      <div>
        <Home />
        <Logo />
        <Hero />
        <Abote />
        <Metrics />
        <Order />
        <Instagram />
        <Footer />
      </div>
    </main>
  );
}
