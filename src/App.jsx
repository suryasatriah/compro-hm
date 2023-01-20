import Fitur from "./partials/fitur";
import Footer from "./partials/footer";
import Hero from "./partials/hero";
import Navbar from "./partials/navbar";

function App() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Fitur/>
      <Footer />
    </main>
  );
};

export default App;