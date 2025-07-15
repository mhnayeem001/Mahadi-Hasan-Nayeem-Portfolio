const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate data analyst with 5+ years of experience in turning
            complex datasets into clear, actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional data analyst working at modern office desk with dual monitors showing analytics"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                My Journey
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                I'm a results-driven data analyst with a passion for uncovering
                hidden patterns in complex datasets. With expertise in
                statistical analysis, machine learning, and business
                intelligence, I help organizations make data-driven decisions
                that drive growth and efficiency.
              </p>
              <p className="text-slate-600 leading-relaxed">
                My approach combines technical expertise with business acumen,
                ensuring that every analysis delivers practical value and
                actionable recommendations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-slate-600">Projects</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-slate-600">Satisfied Clients</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
