import React from "react";
import { useRef } from "react";
import HeroContainer from "./partials/HeroContainer";
import Kontak from "./partials/kontak";
import Fitur from "./partials/FiturAlat";
import logo from "./images/logo.png";
import Map from "./partials/map";
import SpesifikasiProduk from "./partials/SpesifikasiProduk";
import TentangKami from "./partials/TentangKami";

function App() {
  const sectionRefTentang = useRef(null);
  const sectionRefProduk = useRef(null);
  const sectionRefKontak = useRef(null);

  const handleScrollTentang = () => {
    sectionRefTentang.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollProduk = () => {
    sectionRefProduk.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollKontak = () => {
    sectionRefKontak.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <nav className="container max-w-screen-2xl mx-auto">
        <img className="max-h-16 px-10" alt="logo" src={logo} />
        <ul>
          <li className="space-x-5">
            <button onClick={handleScrollTentang}>Tentang</button>
            <button onClick={handleScrollProduk}>Produk</button>
            <button onClick={handleScrollKontak}>Kontak</button>
          </li>
        </ul>
      </nav>
      <body>
        <HeroContainer />
        <SectionTentang ref={sectionRefTentang} />
        <SectionProduk ref={sectionRefProduk} />
        <SpesifikasiProduk/>
        <SectionKontak ref={sectionRefKontak} />
      </body>
      <footer className="container mx-auto max-w-screen-2xl">
        <div className=" flex flex-row sm:max-md:flex-col">
          <div className="w-1/4 pl-10 pr-5 pt-10 pb-5 sm:max-md:w-auto">
            <h1 className="font-bold pb-5">ALAMAT</h1>
            <p>
              18 Office Park, lt. 21
              <br />
              Jl. TB Simatupang No.18, Kebagusan, Ps. Minggu, Kota Jakarta
              Selatan
              <br />
              DKI Jakarta 12520
            </p>
          </div>

          <div className="w-1/4 pl-10 pr-5 pt-10 pb-5 sm:max-md:w-auto">
            <h1 className="font-bold pb-5">KONTAK</h1>
            <p>
              Telepon : <br />
              0812-2827-9988
            </p>
            <p>
              E-mail : <br />
              halimmakmurjayaabadi@gmail.com
            </p>
          </div>

          <div className="w-2/4 pl-10 pr-5 pt-10 pb-5 sm:max-md:w-auto">
            <h1 className="font-bold pb-5">LOKASI</h1>
            <Map />
          </div>
        </div>

        <div className="font-cabin text-white text-center pt-20 pb-10">
          <p className="text-[12px]">
            PT.HALIM MAKMUR JAYAABADI&copy;2023 ALL RIGHT RESERVED
          </p>
        </div>
      </footer>
    </main>
  );
}

const SectionTentang = React.forwardRef((props, ref) => (
  <section ref={ref}>
    <TentangKami />
  </section>
));
const SectionProduk = React.forwardRef((props, ref) => (
  <section ref={ref}>
    <Fitur />
  </section>
));
const SectionKontak = React.forwardRef((props, ref) => (
  <section ref={ref}>
    <Kontak />
  </section>
));

export default App;
