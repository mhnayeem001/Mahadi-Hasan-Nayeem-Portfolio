import { useEffect, useState } from "react";
import { Code, TrendingUp, PieChart } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      color: "bg-primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 88 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Data Analysis & BI",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-accent",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Excel", level: 85 },
        { name: "Pandas", level: 88 },
      ],
    },
    {
      title: "Machine Learning",
      icon: <PieChart className="h-6 w-6" />,
      color: "bg-emerald-500",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 82 },
        { name: "OpenCV", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proficient in data analysis, machine learning, deep learning, and 
            business intelligence tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className={`text-white p-2 rounded-lg mr-3 ${category.color.replace('bg-', 'bg-')}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className={`font-mono text-sm ${category.color.replace('bg-', 'text-')}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full skill-progress-bar ${category.color}`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
