import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="text-gray-600 mt-6 max-w-md mx-auto md:mx-0">
                    Explore frontend, backend, database, and tooling options, compare
                    them side by side, and put together the stack that fits your next
                    project.
                </p>

                <div className="flex gap-4 justify-center md:justify-start mt-8">
                    <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-6 py-3 rounded-full font-semibold">
                        Explore Technologies
                    </button>
                    <button className="border-2 border-gray-800 px-6 py-3 rounded-full font-semibold">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <img src={bannerStack} alt="Development stack illustration" />
            </div>
        </section>
    );
};

export default Hero;