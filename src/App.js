import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Tentang from "./components/tentang"
import Fitur from "./components/fitur";
import Footer from "./components/footer";
//import Produk from "./components/produk";

function App() {
  return (
    <main className="bg-white">
      <Navbar/>
      <Hero/>
      <Tentang/>
      <Fitur/>
      <Footer/>
    </main>
  );
}

export default App;
