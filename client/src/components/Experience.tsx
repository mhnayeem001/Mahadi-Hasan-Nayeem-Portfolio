import { Briefcase, Calendar, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Managing Director",
      company: "AIO I.T LTD.",
      period: "2020 - 2023",
      description: "Led business operations and managed client relations. Oversaw software development projects and provided strategic direction for the company.",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-primary"
    },
    {
      title: "Junior Financial Analyst",
      company: "A.A. Engineering & Consultancy Firm",
      period: "2024 - 2025",
      description: "Analyzed project expenditures using Power BI and Excel for financial planning. Developed financial models and reports to support business decision-making.",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-accent"
    },
    {
      title: "Course Advisor",
      company: "AIO I.T LTD.",
      period: "2021 - 2023",
      description: "Provided guidance on technical courses and helped students choose appropriate learning paths in data science and programming.",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-emerald-500"
    }
  ];

  const achievements = [
    {
      title: "Dean's List Honor Award",
      year: "2023, 2024",
      description: "Recognized for academic excellence with CGPA 3.78",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "GYA Youth Leadership Award",
      year: "2020",
      description: "Earned leadership recognition for community contributions",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "National Science Award",
      year: "2018",
      description: "Ranked 5th place in national science competition",
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Experience & Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional experience and academic achievements that showcase my journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className={`text-white p-3 rounded-lg mr-4 ${exp.color}`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-slate-900 mb-1">
                        {exp.title}
                      </h4>
                      <div className="text-primary font-medium mb-2">
                        {exp.company}
                      </div>
                      <div className="flex items-center text-slate-600 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <p className="text-slate-600">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-primary" />
              Honors & Awards
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">
                        {achievement.title}
                      </h4>
                      <div className="text-primary font-medium mb-2">
                        {achievement.year}
                      </div>
                      <p className="text-slate-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;