import gambar3 from "../images/gambar3.png";
import iconwa from "../images/icon-whatsapp.svg";
import Map from "./map";

function ClickMe() {
  return window.open("https://wa.me/6281313403220", "_blank");
}

function Footer() {
  return (
    <main className="container max-w-5xl mx-auto flex flex-col">
      <div>
        <div>
          {/* hubungi kami */}
          <button onClick={ClickMe}>
            <div className="absolute left-0 right-0 mx-auto w-max pl-72 py-60">
              {/* kotak WA */}
              <div className="absolute left-0 right-0 mx-auto w-max flex flex-row place-items-center space-x-2 pt-5 pl-72">
                {/* dlm kotak WA */}
                <img alt="iconwa" src={iconwa} />
                <h1 className="text-white text-3xl">Hubungi Kami!</h1>
              </div>
              <div className="rectangle1" />
            </div>
          </button>
        </div>
        <img alt="gambar3" src={gambar3} />
      </div>
      <div className="bg-green-800">
        {/* footer */}
        <div className="flex flex-row text-xs sm:max-md:flex-col font-cabin text-white">
          <div className="w-1/4 sm:max-md:w-auto p-10">
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
          <div className="w-1/4 sm:max-md:w-auto p-10">
            <h1 className="font-bold pb-5">KONTAK</h1>
            <p>Telepon : 081313403220</p>
            <p>Email : halimmakmurjayaabadi@gmail.com</p>
          </div>
          <div className="w-2/4 sm:max-md:w-auto py-10 pl-10">
            <h1 className="font-bold pb-5">LOKASI</h1>
            <Map />
          </div>
        </div>
        <div className="font-cabin text-white text-center pt-20 pb-10">
          <p className="text-[12px]">
            PT.HALIM MAKMUR JAYAABADI&copy;2023 ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </main>
  );
}

export default Footer;
