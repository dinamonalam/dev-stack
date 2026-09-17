import banner from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#technologies" className="brand-gradient text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Explore Technologies
            </a>
            <a href="#about" className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors">
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src={banner} alt="Development stack illustration" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;