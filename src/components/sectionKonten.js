import img1A from "../assets/images/img1A.webp";
import img2A from "../assets/images/img2A.webp";
import img3A from "../assets/images/img3A.webp";
import img4A from "../assets/images/img4A.webp";

function Konten(props) {
  const title = props.title;
  const content = props.content;
  const image = props.image;
  let flex_reverse = props.flex_reverse;

  if (flex_reverse === true) {
    flex_reverse = "flex-row-reverse";
  } else {
    flex_reverse = "flex-row";
  }

  return (
    <div
      className={`align-middle mx-auto flex ${flex_reverse} sm:max-md:flex-col`}
    >
      <div className="w-3/5 sm:max-md:w-auto">
        <img alt="illustration_image" src={image} />
      </div>
      <div
        className="bg-konten w-2/5 p-32 font-cabin text-left 
      sm:max-md:text-center sm:max-md:py-10 sm:max-md:px-auto sm:max-md:w-auto"
      >
        <h1 className="font-bold align-middle text-lg pb-5 sm:max-md:pb-5">
          {title}
        </h1>
        <p className="align-middle text-sm pb-0 overflow-hidden">{content}</p>
      </div>
    </div>
  );
}

//main function untuk bagian SectionKonten
function SectionKonten() {
  return (
    <main className="container max-w-screen-2xl mx-auto flex flex-col">
      <div className="font-cabin font-semibold text-center p-20 bg-green-50">
        <h2 className="text-2xl pb-1">TECNOGREEN.ID</h2>
        <h1 className="text-3xl">Perlindungan untuk tanaman kebun anda!</h1>
      </div>

      <div>
        <Konten
          title="PENGENDALIAN HAMA TERPADU"
          content="Sistem pengendalian hama terpadu(PHT) dapat mengendalikan serangga dengan teknologi ramah lingkungan sehingga
          dapat menjadi solusi untuk mengurangi
          dampak negatif dari hama dan menjaga hasil produksi
          tetap optimal."
          image={img1A}
          flex_reverse={false}
        />
        <Konten
          title="RAMAH LINGKUNGAN DENGAN ENERGI MATAHARI"
          content="Tecnogreen mengedepankan produk dan sistem pertanian yang ramah lingkungan. Pertanian yang ramah lingkungan dan
          berkelanjutan menjadi kunci utama
          dalam mitigasi perubahan iklim."
          image={img2A}
          flex_reverse={true}
        />
        <Konten
          title="PEMANFAATAN TEKNOLOGI TERKINI"
          content="Kami mengembangkan sistem yang dapat dipadukan dengan teknologi internet of things(IoT) sehingga nantinya dapat memonitor keadaan lingkungan dan memberikan informasi secara real time melalui dashboard."
          image={img3A}
        />
        <Konten
          title="SISTEM YANG DAPAT DIANDALKAN"
          content="Tecnogreen mengembangkan sistem dengan mengedepankan kualitas serta efisiensi pengendalian terhadap hama perkebunan agar sistem PHT kami andal dan tetap mengedepankan prinsip teknologi hijau."
          image={img4A}
          flex_reverse={true}
        />
      </div>

    </main>
  );
}

export default SectionKonten;
