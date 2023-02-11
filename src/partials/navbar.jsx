import logo from "../images/logo.png";


function Navbar() {
  return (
    <main className=" drop-shadow ">
      <div className="container max-w-5xl mx-auto flex flex-row max-h-20 items-center space-x-96 sm:max-md:space-x-0">
        <div>
          <img alt="logo" src={logo} className="pl-3 py-3" />
        </div>
        <div className="flex font-cabin text-sm pl-60 pr-3 py-3">
          <ul className="flex flex-row items-center space-x-4">
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
