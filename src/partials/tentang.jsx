import gambar2 from "../images/gambar2.jpg";
import gambaralat1 from "../images/gambaralat.png";

//Bagian tentang kami
function Tentang() {
  return (
    <main className="flex flex-col">


      <div className="max-w-screen-2xl mx-auto place-items-center flex flex-row bg-gradient-to-r from-green-500 to-white">
        
        <div className="container font-cabin pl-10 w-3/5 sm:max-md:absolute sm:max-md:text-white">
          <h1 className="font-bold text-xl">TENTANG KAMI</h1>
          <p className="text-sm">
            <b>Tecnogreen</b> merupakan penyedia produk dan jasa keperluan
            pertanian yang dikelola oleh PT. Halim Makmur Jayaabadi. Tecnogreen
            menerapkan teknologi yang ramah lingkungan dan mengusung inovasi
            terdepan untuk solusi pertanian dan perkebunan.
          </p>
        </div>

        <img className="w-2/5 self-stretch flex" alt="illustration2" src={gambar2} />
        
      </div>


      <div className="mx-auto flex flex-row sm:max-md:flex-col place-items-center">

        <div className="w-2/5 sm:max-md:w-auto px-20 py-10 sm:max-md:p-20">
          <img alt="gambaralat1" src={gambaralat1} />
        </div>
        <div className="w-3/5 sm:max-md:w-auto px-10 py-10 text-right sm:max-md:text-center font-cabin">
          <h2>Produk</h2>
          <h1 className="font-bold">PERANGKAP HAMA TERPADU</h1>
          <h2 className="pb-3">Model PHT BASIC</h2>
          <p className="text-sm">
            Tecnogreen merupakan penyedia produk dan jasa keperluan pertanian
            yang dikelola oleh PT. Halim Makmur Jayaabadi. Tecnogreen menerapkan
            teknologi yang ramah lingkungan dan mengusung inovasi terdepan untuk
            solusi pertanian dan perkebunan.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Tentang;
