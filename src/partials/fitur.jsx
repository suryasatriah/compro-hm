import img1A from "../images/img1A.webp";
import img2A from "../images/img2A.webp";
import img3A from "../images/img3A.webp";
import img4A from "../images/img4A.webp";
import gambaralat from "../images/gambaralat.png";
import Fitur1 from "./fitur1";

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

      <div>
        <h1 className="font-bold font-cabin text-xl w-2/3 py-10">
          Apa saja fitur, kelengkapan, dan fasilitas yang akan anda dapatkan
          ketika menggunakan produk kami?
        </h1>
      </div>

      <div className="flex flex-row place-items-center">
        <div className="w-1/2 p-10 space-y-1">
          <Fitur1
            heading1="Alat Bekerja 24/7"
            heading2="Alat bekerja non-stop 24 jam selama baterai masih tersedia."
          />
          <Fitur1
            heading1="Sensor ON/OFF Otomatis"
            heading2="Alat dilengkapi sensor LDR yang dapat diatur agar dapat menyalakan lampu otomatis saat gelap."
          />
          <Fitur1
            heading1="Proteksi dari Arus Pendek/Korsleting"
            heading2="Alat dilengkapi dengan sistem auto cutoff untuk mencegah rusaknya alat akibat korsleting."
          />
          <Fitur1
            heading1="Sistem Manajemen Baterai"
            heading2="Alat dilengkapi dengan BMS untuk mengatur baterai agar tidak terjadi overcharge."
          />
          <Fitur1
            heading1="Kunci Ganda"
            heading2="Alat dilengkapi dengan kunci tekan yang dapat ditambah dengan gembok agar aman."
          />
        </div>

        <div className="w-1/2 place-items-center p-1">
          <img src={gambaralat} alt="gambaralat" />
        </div>
      </div>

      <div>
        <p className="font-cabin text-center text-sm px-36 py-10">Perangkap hama Tecnogreen dapat menampilkan data beberapa parameter seperti kapasitas baterai, tegangan baterai, lokasi alat, kamera, dan daya secara real time melalui dashboard IoT*. Selain menampilkan data, pengguna dapat mengontrol alat perangkap dari jarak jauh melalui dashboard ini.</p>
      </div>

    </main>
  );
}

export default Fitur;
