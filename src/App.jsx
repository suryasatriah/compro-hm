import Fitur from "./partials/fitur";
import Footer from "./partials/footer";
import Hero from "./partials/hero";
import Navbar from "./partials/navbar";
import Tentang from "./partials/tentang";


function App() {
  return (
    <main className="bg-white">
      <Navbar/>
      <Hero />
      <Tentang />
      <Fitur />
      <Footer />
    </main>
  );
};

export default App;