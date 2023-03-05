import gambar2 from "../images/gambar2.jpg";

//TENTANG KAMI

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

      <div className="mx-15 my-20 relative">
        <div className="compro relative mx-auto pl-10"></div>
        <div className="flex absolute left-96 bottom-2 place-items-center p-10">
          <div className="dot2 text-6xl pt-7 text-center">
            <i class="fa-regular fa-file"></i>
          </div>

          <div className="px-5 font-cabin">
            <h1 class="font-bold text-2xl">Company Profile</h1>
            <h1 class="font-medium text-xl">Tecnogreen.id</h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TentangKami;
