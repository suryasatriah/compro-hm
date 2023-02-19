import Fitur from "./partials/fitur";
import Footer from "./partials/footer";
import Hero from "./partials/hero";
import Navbar from "./partials/navbar";
import Tentang from "./partials/tentang";
import { React } from "react";
import Spesifikasi from "./partials/spesifikasi";


function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Tentang />
      <Fitur />
      <Spesifikasi/>
      <Footer />
    </main>
  );
}

export default App;