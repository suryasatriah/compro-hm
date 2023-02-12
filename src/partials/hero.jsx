import heroimg from "../images/hero.png";

function Hero() {
  return (
    <main>
      <div className="container max-w-screen-2xl mx-auto max-h-auto items-center">
        <div className="absolute left-0 right-0 pt-10 mx-auto w-max">
          <h1 className="font-cabin font-bold text-white align-center text-4xl">
            PERANGKAP HAMA TERPADU
          </h1>
        </div>
        <img alt="heroimg" src={heroimg} />
      </div>
    </main>
  );
}

export default Hero;
