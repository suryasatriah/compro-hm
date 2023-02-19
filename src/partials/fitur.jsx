import img1A from "../images/img1A.webp";
import img2A from "../images/img2A.webp";
import img3A from "../images/img3A.webp";
import img4A from "../images/img4A.webp";
import img5A from "../images/ilustrasi.JPG";
import dashboard from "../images/dashboard.png";


//fungsi untuk membuat styling dan formatting bagian "How it Works"
function Kelengkapan(props) {
  const heading1 = props.heading1;
  const heading2 = props.heading2;
  const icon = props.icon;

  return (
    <>
      <div className="flex flex-row space-x-2 container items-center">
        <div className="dot flex-none px-6 py-6">
          <i
            class={icon}
            style={{ fontSize: "70px", color: "green", placeContent: "center"}}
          />
        </div>
        <div className="flex flex-col font-cabin">
          <h1 className="font-bold pb-2">{heading1}</h1>
          <p className="text-sm">{heading2}</p>
        </div>
      </div>
    </>
  );
}


//fungsi untuk membuat styling dan formatting bagian "Apa saja yang anda dapatkan ketika..."
function Keunggulan(props) {
  const title = props.title;
  const content = props.content;
  const image = props.image;
  let flex_reverse = props.flex_reverse;

  if (flex_reverse === true) {
    flex_reverse = "flex-row-reverse";
  }

  return (
    <div
      className={`container align-middle mx-auto flex ${flex_reverse} sm:max-md:flex-col`}
    >
      <div className="w-3/5 sm:max-md:w-auto">
        <img alt="illustration_image" src={image} />
      </div>
      <div className="bg-fitur1  w-2/5 sm:max-md:w-auto font-cabin text-left sm:max-md:text-center p-32">
        <h1 className="font-bold align-middle text-base mb-3">{title}</h1>
        <p className="align-middle text-xs">{content}</p>
      </div>
    </div>
  );
}


//main function untuk bagian fitur
function Fitur() {
  return (
    <main className="container max-w-screen-2xl mx-auto flex flex-col">
      <div className="font-cabin font-semibold text-center p-20 bg-green-50">
        <h2 className="text-lg pb-1">HOW IT WORKS</h2>
        <h1 className="text-2xl">Perlindungan untuk tanaman kebun anda!</h1>
      </div>

      <div>
        <Keunggulan
          title="MEMERANGKAP BERBAGAI JENIS HAMA TUMBUHAN"
          content="Produk kami dapat menarik serangga agar datang dan terperangkap menggunakan teknologi lampu perangkap(light trap), atraktan perangkap(attractant trap), lem perangkap(sticky trap) dan perangkap listrik(electrical trap)."
          image={img1A}
        />
        <Keunggulan
          title="DAPAT BEROPERASI DI TEMPAT TANPA ALIRAN LISTRIK"
          content="Produk kami dilengkapi dengan solar panel berkapasitas 80 Wp dan
            baterai berkapasitas 120 Ah sehingga dapt digunakan di tempat yang
            tidak tersedia aliran listrik PLN(off-grid)."
          image={img2A}
          flex_reverse={true}
        />
        <Keunggulan
          title="BERFUNGSI SEBAGAI ALAT PERANGKAP DAN MONITORING(MULTI-TRAP)"
          content="Dibekali dengan teknologi internet of things(IoT), produk kami
            dapat memonitor keadaan sekitar alat dan memberikan informasi yang
            dapat diakses melalui website dashboard."
          image={img3A}
        />
        <Keunggulan
          title="KOKOH, AWET, RAMAH LINGKUNGAN"
          content="Struktur produk kami disusun dengan material berkualitas dan
            tentunya awet dan tahan di berbagai jenis lahan kawasan pertanian
            seperti persawahan, kws. holtikultura, dan area kebun."
          image={img4A}
          flex_reverse={true}
        />
      </div>

      <h1 className="font-cabin font-bold text-xl w-2/3 px-5 py-10">
        Apa saja fitur, kelengkapan, dan fasilitas yang akan anda dapatkan
        ketika menggunakan produk kami?
      </h1>

      <div className="flex flex-row self-stretch bg-green-200">
        <div className="w-1/2 flex-col self-center space-y-5 p-5">
          <Kelengkapan
            icon="fa fa-clock"
            heading1="Alat Bekerja 24/7"
            heading2="Alat bekerja non-stop 24 jam selama baterai masih tersedia."
          />
          <Kelengkapan
            icon="fa fa-power-off"
            heading1="Sensor ON/OFF Otomatis"
            heading2="Alat dilengkapi sensor LDR yang dapat diatur agar dapat menyalakan lampu otomatis saat gelap."
          />
          <Kelengkapan
            icon="fa fa-lightbulb"
            heading1="Proteksi dari Arus Pendek/Korsleting"
            heading2="Alat dilengkapi dengan sistem auto cutoff untuk mencegah rusaknya alat akibat korsleting."
          />
          <Kelengkapan
            icon="fa fa-battery-half"
            heading1="Sistem Manajemen Baterai"
            heading2="Alat dilengkapi dengan BMS untuk mengatur baterai agar tidak terjadi overcharge."
          />
          <Kelengkapan
            icon="fa fa-lock"
            heading1="Kunci Ganda"
            heading2="Alat dilengkapi dengan kunci tekan yang dapat ditambah dengan gembok agar aman."
          />
        </div>

        <img alt="ilustrasi alat" src={img5A} className="w-1/2 self-center" />
      </div>

      <div>
        <p className="font-cabin text-center text-sm px-36 py-10">
          Perangkap hama Tecnogreen dapat menampilkan data beberapa parameter
          seperti kapasitas baterai, tegangan baterai, lokasi alat, kamera, dan
          daya secara real time melalui dashboard IoT*. Selain menampilkan data,
          pengguna dapat mengontrol alat perangkap dari jarak jauh melalui
          dashboard ini.
        </p>
      </div>
      <img alt="dashboard" src={dashboard} className="items-center px-5
      "/>
    </main>
  );
}

export default Fitur;
