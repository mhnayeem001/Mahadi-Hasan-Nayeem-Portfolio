import {
  TrendingUp,
  Database,
  BarChart2,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          {/* About Me Box with title and paragraph */}
          <div
            className="inline-block p-8 rounded-xl border border-slate-200 bg-white shadow-sm
                       transition group hover:border-blue-500 hover:shadow-lg cursor-pointer max-w-3xl"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6
                         transition-colors duration-300
                         group-hover:text-blue-600"
            >
              About Me
            </h2>
            <p className="text-xl text-[#475569]">
              Final-year Computer Science & Engineering student at American International University-Bangladesh.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Card */}
          <div
            className="relative w-full max-w-md mx-auto rounded-2xl
                       bg-gradient-to-tr from-indigo-500 via-purple-700 to-cyan-500
                       p-1
                       shadow-[0_0_15px_rgba(99,102,241,0.7),0_0_25px_rgba(139,92,246,0.8),0_0_35px_rgba(6,182,212,0.7)]
                       transition-transform duration-500
                       hover:scale-105
                       hover:shadow-[0_0_30px_rgba(99,102,241,1),0_0_40px_rgba(139,92,246,1),0_0_50px_rgba(6,182,212,1)]
                       cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="https://raw.githubusercontent.com/mhnayeem001/Picture/main/IMG_8757.jpeg"
              alt="Mahadi Hasan Nayeem"
              width={1536}
              height={1802}
              className="rounded-2xl object-cover border-4 border-white shadow-lg"
              style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease" }}
              onMouseMove={(e) => {
                const card = e.currentTarget.parentElement;
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.parentElement;
                if (!card) return;
                card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(99,102,241,0.5), transparent 60%)",
              }}
            />
          </div>

          {/* Professional Journey & Stats */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition group hover:border-blue-500">
              <h3 className="text-3xl font-semibold text-[#1e293b] mb-4 group-hover:text-blue-600">
                Professional Journey
              </h3>
              <p className="text-lg text-[#475569] leading-relaxed mb-4">
                I specialize in <span className="font-medium text-[#0369a1]">Information Systems</span> with hands-on experience in data analysis, machine learning, and BI tools. With a CGPA of 3.78 and multiple Dean's List awards.
              </p>
              <p className="text-lg text-[#475569] leading-relaxed">
                I thrive at the intersection of <span className="font-medium text-[#0369a1]">data and decision-making</span>, transforming complex information into strategic business insights.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition group hover:border-blue-500">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "3.78",
                    label: "CGPA",
                    icon: <TrendingUp className="h-5 w-5" />,
                    color: "bg-[#0369a1] text-white",
                  },
                  {
                    value: "20+",
                    label: "Projects",
                    icon: <Database className="h-5 w-5" />,
                    color: "bg-[#1e40af] text-white",
                  },
                  {
                    value: "100%",
                    label: "Analytical",
                    icon: <BarChart2 className="h-5 w-5" />,
                    color: "bg-[#0f766e] text-white",
                  },
                  {
                    value: "∞",
                    label: "Curiosity",
                    icon: <ArrowRight className="h-5 w-5" />,
                    color: "bg-[#334155] text-white",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border border-[#e2e8f0] hover:shadow-md transition-all hover:border-[#cbd5e1]"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${stat.color}`}>
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#1e293b]">
                          {stat.value}
                        </div>
                        <div className="text-sm text-[#64748b]">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;