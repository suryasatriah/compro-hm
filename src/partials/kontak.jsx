import gambar3 from "../images/gambar3.png";
import iconwa from "../images/icon-whatsapp.svg";

function ClickMe() {
  return window.open("https://wa.me/6281228279988", "_blank");
}

function Kontak() {
  return (
    <main>
      <div className="container max-w-screen-2xl mx-auto flex flex-col">
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
    </main>
  );
}

export default Kontak;
