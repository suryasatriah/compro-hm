function SpecificationItems(props) {
  const icon = props.icon;
  const heading = props.heading;
  const subheading = props.subheading;
  return (
    <main className="flex flex-col place-items-center items-center">
      <div className="square-spesification">
        <i className={icon}></i>
      </div>
      <div className="font-cabin text-center">
        <h1 className="font-bold">{heading}</h1>
        <h2 className="font-semibold">{subheading}</h2>
      </div>
    </main>
  );
}

function Spesifikasi() {
  return (
    <main className="container max-w-screen-2xl mx-auto flex flex-col">
      <h1 className="py-10 text-center text-2xl font-bold font-cabin">SPESIFIKASI</h1>
      <div className="flex place-content-center content-between space-x-24 pb-10">
        <SpecificationItems heading="Dimensi" subheading="600x600x1000 mm" />
        <SpecificationItems heading="Berat" subheading="80 kg" />
        <SpecificationItems heading="Baterai" subheading="LiFePO4 120Ah" />
        <SpecificationItems heading="Panel Surya" subheading="Mono 80 Wp" />
        <SpecificationItems heading="Daya Total" subheading="60 W" />
      </div>

      <div className="flex place-content-center">
        <table className="font-cabin table-auto border-spacing-2">
          <thead className="font-bold">
            <th className="border">Fitur</th>
            <th className="border">Basic Version</th>
            <th className="border">IoT Version</th>
          </thead>
          <tbody>
            <tr>
              <td className="border">Sensor ON/OFF Otomatis LDR</td>
              <td className="border">Ya</td>
              <td className="border">Ya</td>
            </tr>
            <tr>
              <td className="border">Indikator Baterai</td>
              <td className="border">Ya</td>
              <td className="border">Ya</td>
            </tr>
            <tr>
              <td className="border">Kunci Gembok Ganda</td>
              <td className="border">Ya</td>
              <td className="border">Ya</td>
            </tr>
            <tr>
              <td className="border">Kamera Pengawas(CCTV)</td>
              <td className="border">Tidak</td>
              <td className="border">Ya</td>
            </tr>
            <tr>
              <td className="border">Dashboard Monitoring Alat</td>
              <td className="border">Tidak</td>
              <td className="border">Ya</td>
            </tr>
            <tr>
              <td className="border">GPS Monitoring</td>
              <td className="border">Tidak</td>
              <td className="border">Ya</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Spesifikasi;
