const Footer = () => {
  return (
    <main className="container max-w-5xl mx-auto flex flex-col bg-green-800">
      <div className="flex flex-row sm:max-md:flex-col font-cabin text-white">
        <div className="w-1/3 sm:max-md:w-auto p-10">
          <h1 className="font-bold">ALAMAT</h1>
          <p>
            18 Office Park, lt. 21 Jl. TB Simatupang No.18, Kebagusan, Ps.
            Minggu, Kota Jakarta Selatan, DKI Jakarta 12520
          </p>
        </div>
        <div className="w-1/3 sm:max-md:w-auto p-10">
          <h1 className="font-bold">KONTAK</h1>
          <p>Telepon : 081313403220</p>
          <p>Email : halimmakmurjayaabadi@gmail.com</p>
        </div>
        <div className="w-1/3 sm:max-md:w-auto p-10">
            <h1 className="font-bold">LOKASI</h1>
        </div>
      </div>
      <div className="font-cabin text-white text-center py-10">
        <p className="text-[14px]">PT.HALIM MAKMUR JAYAABADI&copy;2023 ALL RIGHT RESERVED</p>
      </div>
    </main>
  );
};

export default Footer;
