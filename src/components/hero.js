import heroimg from "../assets/hero.png"

const Hero = () => {
    return (
        <div>
            <div className="container max-w-5xl mx-auto max-h-auto items-center">
                <div className = "absolute left-0 right-0 pt-10 mx-auto w-max">
                    <h1 className="font-cabin font-bold text-white align-center text-4xl">
                    PERANGKAP HAMA TERPADU
                    </h1>
                </div>
                <div className="max-w-5xl">
                    <img alt="heroimg" src={heroimg} />
                </div>
            </div>

        </div>
    )
}

export default Hero;