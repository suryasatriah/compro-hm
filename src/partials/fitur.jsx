import img1A from '../images/img1A.webp';
import img2A from '../images/img2A.webp';
import img3A from '../images/img3A.webp';
import img4A from '../images/img4A.webp';

function Fitur() {
  
  return (
    <main className="container mx-auto max-w-5xl">
      <div className="flex flex-col">
        <div className="font-cabin font-semibold text-center place-content-center p-20">
          {/* title */}
          <h2 className="text-lg">HOW IT WORKS</h2>
          <h1 className="text-2xl">Perlindungan untuk tanaman kebun anda!</h1>
        </div>
        <div className="h-auto flex flex-row sm:max-md:flex-col">
          {/* produk fitur 1 */}
          <div className="w-3/5 sm:max-md:w-auto">
            <img alt="img1A" src={img1A} />
          </div>
          <div className="bg-fitur1 w-2/5 sm:max-md:w-auto font-cabin text-left sm:max-md:text-center p-20">
            <h1 className="font-bold text-base mb-3">
              MEMERANGKAP BERBAGAI JENIS HAMA TUMBUHAN
            </h1>
            <p className="text-xs">
              Produk kami dapat menarik serangga agar datang dan terperangkap
              menggunakan teknologi lampu perangkap(light trap), atraktan
              perangkap(attractant trap), lem perangkap(sticky trap) dan
              perangkap listrik(electrical trap).
            </p>
          </div>
        </div>
        <div className="h-auto flex flex-row sm:max-md:flex-col-reverse ">
          {/* produk fitur 2 */}
          <div className="bg-fitur1 w-2/5 sm:max-md:w-auto font-cabin text-left sm:max-md:text-center p-20">
            <h1 className="font-bold text-base mb-3">
              DAPAT BEROPERASI DI TEMPAT TANPA ALIRAN LISTRIK
            </h1>
            <p className="text-xs">
              Produk kami dilengkapi dengan solar panel berkapasitas 80 Wp dan
              baterai berkapasitas 120 Ah sehingga dapt digunakan di tempat yang
              tidak tersedia aliran listrik PLN(off-grid).
            </p>
          </div>
          <div className="w-3/5 sm:max-md:w-auto">
            <img alt="img2A" src={img2A} />
          </div>
        </div>
        <div className="h-auto flex flex-row sm:max-md:flex-col">
          {/* produk fitur 3 */}
          <div className="w-3/5 sm:max-md:w-auto">
            <img alt="img3A" src={img3A} />
          </div>
          <div className="bg-fitur1 w-2/5 sm:max-md:w-auto font-cabin text-left sm:max-md:text-center p-20">
            <h1 className="font-bold text-base mb-3">
              BERFUNGSI SEBAGAI ALAT PERANGKAP DAN MONITORING(MULTI-TRAP)
            </h1>
            <p className="text-xs">
              Dibekali dengan teknologi internet of things(IoT), produk kami
              dapat memonitor keadaan sekitar alat dan memberikan informasi yang
              dapat diakses melalui website dashboard.
            </p>
          </div>
        </div>
        <div className="h-auto flex flex-row sm:max-md:flex-col-reverse">
          {/* produk fitur 4 */}
          <div className="bg-fitur1 w-2/5 sm:max-md:w-auto font-cabin text-left sm:max-md:text-center p-20">
            <h1 className="font-bold text-base mb-3">
              KOKOH, AWET, RAMAH LINGKUNGAN
            </h1>
            <p className="text-xs">
              Strukturs produk kami disusun dengan material berkualitas dan
              tentunya awet dan tahan di berbagai jenis lahan kawasan pertanian
              seperti persawahan, kws. holtikultura, dan area kebun.
            </p>
          </div>
          <div className="w-3/5 sm:max-md:w-auto">
            <img alt="img4A" src={img4A} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Fitur;
