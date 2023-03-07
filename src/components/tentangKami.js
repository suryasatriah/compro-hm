import gambar2 from "../assets/images/gambar2.jpg";
import compro from "../assets/tecnogreen_compro.pdf";
import bg_compro from "../assets/images/bg-compro.jpg";

//TENTANG KAMI
function redirectCompro() {
  window.open(compro, "blank");
}

function TentangKami() {
  return (
    <main>
      <div className="place-items-center flex flex-row bg-gradient-to-r from-green-500 to-white">
        <div className="font-cabin w-2/3 px-5 sm:max-md:absolute">
          <h1 className="text-2xl font-extrabold pb-5">TENTANG KAMI</h1>
          <p className="text-base font-medium sm:max-md:text-sm sm:max-md:text-blue">
            Tecnogreen adalah merek dagang dari PT. Halim Makmur Jayaabadi,
            sebuah perusahaan yang berspesialisasi dalam pembuatan peralatan
            pertanian. Kami memahami bahwa untuk meningkatkan kualitas produk
            pertanian, peralatan pendukung yang efektif sangat penting. Oleh
            karena itu, kami menawarkan peralatan yang dapat membantu mencapai
            hasil produksi yang terbaik.
          </p>
        </div>

        <div className="w-1/3 sm:max-md:w-auto">
          <img alt="tentang-kami" src={gambar2} />
        </div>
      </div>

      <div className="relative text-center">
        <img src={bg_compro} alt="bg-compro" className="relative width-full height-auto"/>
        
        <button onClick={redirectCompro} className="btn-compro">
          <i class="fa-regular fa-file"></i>
          <div className="sm:max-md:text-base">
            <h1 class="font-bold text-2xl sm:max-md:text-base">Company Profile</h1>
            <h1 class="font-medium text-xl sm:max-md:text-base">Tecnogreen.id</h1>
          </div>
        </button>
      </div>
    </main>
  );
}

export default TentangKami;
