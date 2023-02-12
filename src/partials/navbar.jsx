import logo from "../images/logo.png";

function Navbar() {
  return (
    <main className="container max-w-screen-2xl mx-auto max-h-24">
      <div className="flex flex-row place-items-center py-3 sm:max-md:space-x-0">
        
        <img className="max-h-16 px-10" alt="logo" src={logo} />

        <div className="font-cabin text-lg">
          <ul className="flex flex-row space-x-5">
            <li>Tentang</li>
            <li>Produk</li>
            <li>Kontak</li>
          </ul>
        </div>

      </div>
    </main>
  );
}

export default Navbar;
