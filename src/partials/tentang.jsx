import gambar2 from "../images/gambar2.jpg";
import gambaralat1 from "../images/gambaralat.png";

const Tentang = () => {
  return (
    <main className="container max-w-5xl mx-auto flex flex-col">
      <div className="flex flex-row place-items-center bg-gradient-to-r from-green-500 to-white">
        {/* tentang kami */}
        <div className="font-cabin space-y-5 ml-10 max-w-md sm:max-md:absolute sm:max-md:text-white">
          <h1 className="font-bold text-xl">TENTANG KAMI</h1>
          <p className="text-sm">
            <b>Tecnogreen</b> merupakan penyedia produk dan jasa keperluan
            pertanian yang dikelola oleh PT. Halim Makmur Jayaabadi. Tecnogreen
            menerapkan teknologi yang ramah lingkungan dan mengusung inovasi
            terdepan untuk solusi pertanian dan perkebunan.
          </p>
        </div>
        <div className="w-fit h-fit">
          <img alt="illustration2" src={gambar2} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-row sm:max-md:flex-col place-items-center">
        {/* produk */}
        <div className="w-1/3 sm:max-md:w-auto px-20 py-10 sm:max-md:p-20">
          <img alt="gambaralat1" src={gambaralat1} />
        </div>
        <div className="w-2/3 sm:max-md:w-auto px-10 py-10 text-right sm:max-md:text-center font-cabin">
          <h2>Produk</h2>
          <h1 className="font-bold">PERANGKAP HAMA TERPADU</h1>
          <h2>Model PHT BASIC</h2>
          <p className="text-sm pt-3">
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
