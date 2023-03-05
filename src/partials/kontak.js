import gambar3 from "../images/gambar3.png";
import iconwa from "../images/icon-whatsapp.svg";

function ClickMe() {
  return window.open("https://wa.me/6281228279988", "_blank");
}

function Kontak() {
  return (
    <main>
        <div>
          {/* hubungi kami */}
          <button onClick={ClickMe}>
            <div className="absolute left-0 right-0 mx-auto w-max pl-72 py-60 sm:max-md:px-0 sm:max-md:pt-5">
              {/* kotak WA */}
              <div>
                <h2>Informasi lebih lanjut silakan hubungi kami</h2>
              </div>
              <div className="absolute left-0 right-0 mx-auto w-max flex flex-row place-items-center space-x-2 pt-5 pl-72 sm:max-md:px-0 sm:max-md:pt-5">
                {/* dlm kotak WA */}
                <img alt="iconwa" src={iconwa} />
                <h1 className="text-white text-3xl sm:max-md:text-m">Hubungi Kami!</h1>
              </div>
              <div className="rectangle1 sm:max-md:rectangle2" />
            </div>
          </button>
        </div>
        <img alt="gambar3" src={gambar3} />
    </main>
  );
}

export default Kontak;