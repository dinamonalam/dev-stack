const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          About <span className="text-brand-gradient">Dev Stack</span>
        </h2>
        <p className="text-slate-500 mt-4 leading-relaxed">
          Dev Stack is a curated platform that helps developers explore
          modern frontend, backend, database, and tooling options. Instead
          of jumping between docs and blog posts, you can compare
          technologies side by side and put together a stack that fits your
          next project in minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-3xl font-extrabold text-brand-gradient">12+</p>
            <p className="text-sm text-slate-500 mt-1">Technologies Listed</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-3xl font-extrabold text-brand-gradient">7</p>
            <p className="text-sm text-slate-500 mt-1">Categories Covered</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-3xl font-extrabold text-brand-gradient">
              100%
            </p>
            <p className="text-sm text-slate-500 mt-1">Free to Explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;