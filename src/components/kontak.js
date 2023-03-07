import gambar3 from "../assets/images/gambar3.png";

function redirectWhatsapp() {
  return window.open("https://wa.me/6281228279988", "_blank");
}

function Kontak() {
  return (
    <main>
      <div className="relative text-center">
        <img alt="gambar3" src={gambar3} className="w-full h-auto"></img>

        <h1 className="heading-kontak text-left text-2xl sm:max-md:text-sm sm:max-md:text-center sm:max-md:hidden">Kontak kami untuk informasi lebih lanjut mengenai Tecnogreen.</h1>
        
        <button className="btn-whatsapp flex flex-row place-items-center space-x-2 
        sm:max-md:left-1/2 sm:max-md:px-20" 
        onClick={redirectWhatsapp}>
          <i class="fab fa-whatsapp"></i>
          <h1 className="sm:max-md:text-base sm:max-md:mx-auto">Hubungi Kami!</h1>
        </button>

      </div>
    </main>
  );
}

export default Kontak;
