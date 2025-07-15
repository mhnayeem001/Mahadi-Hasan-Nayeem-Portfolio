const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Computer Science & Engineering student at American International University-Bangladesh,
            passionate about data science, machine learning, and business intelligence
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
                I'm a Computer Science and Engineering student specializing in Information Systems,
                with a passion for leveraging data analysis, machine learning, and BI Development 
                to drive innovation. Currently pursuing my Bachelor's degree at American International 
                University-Bangladesh with a CGPA of 3.78.
              </p>
              <p className="text-slate-600 leading-relaxed">
                My goal is to contribute to cutting-edge research and industry solutions while 
                continuously enhancing my technical and analytical expertise in data science, 
                computer vision, and business intelligence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">3.78</div>
                <div className="text-sm text-slate-600">CGPA</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-slate-600">Major Projects</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">2025</div>
                <div className="text-sm text-slate-600">Expected Graduation</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">Dean's List</div>
                <div className="text-sm text-slate-600">2023, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
