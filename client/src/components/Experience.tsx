import { Briefcase, Calendar, Award, Rocket, BrainCircuit, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Unified color scheme
  const colors = {
    primary: {
      light: "from-blue-100 to-blue-50",
      medium: "from-blue-400 to-blue-600",
      dark: "from-blue-600 to-blue-800",
      text: "text-blue-600",
      bg: "bg-blue-600",
    },
    secondary: {
      light: "from-purple-100 to-purple-50",
      medium: "from-purple-400 to-purple-600",
      dark: "from-purple-600 to-purple-800",
      text: "text-purple-600",
      bg: "bg-purple-600",
    },
    accent: {
      light: "from-emerald-100 to-emerald-50",
      medium: "from-emerald-400 to-emerald-600",
      dark: "from-emerald-600 to-emerald-800",
      text: "text-emerald-600",
      bg: "bg-emerald-600",
    }
  };

  const experiences = [
    {
      title: "Data Analyst",
      company: "Techmak Technology",
      period: "Jun 2025 - Present",
      description:
        "Analyzing datasets to uncover insights, create visual dashboards, and support data-driven decision-making for business solutions.",
      icon: <BrainCircuit className="h-6 w-6" />,
      color: `bg-gradient-to-br ${colors.primary.medium}`,
    },
    {
      title: "Managing Director",
      company: "AIO I.T LTD.",
      period: "2020 - 2023",
      description:
        "Led business operations and managed client relations. Oversaw software development projects and provided strategic direction for the company.",
      icon: <Rocket className="h-6 w-6" />,
      color: `bg-gradient-to-br ${colors.secondary.medium}`,
    },
    {
      title: "Junior Financial Analyst",
      company: "A.A. Engineering & Consultancy Firm",
      period: "2024 - 2025",
      description:
        "Analyzed project expenditures using Power BI and Excel for financial planning. Developed financial models and reports to support business decision-making.",
      icon: <Briefcase className="h-6 w-6" />,
      color: `bg-gradient-to-br ${colors.accent.medium}`,
    },
    {
      title: "Course Advisor",
      company: "AIO I.T LTD.",
      period: "2021 - 2023",
      description:
        "Provided guidance on technical courses and helped students choose appropriate learning paths in data science and programming.",
      icon: <Sparkles className="h-6 w-6" />,
      color: `bg-gradient-to-br ${colors.primary.medium}`,
    },
  ];

  const achievements = [
    {
      title: "Dean's List Honor Award",
      year: "2023, 2024",
      description: "Recognized for academic excellence with CGPA 3.78",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "GYA Youth Leadership Award",
      year: "2020",
      description: "Earned leadership recognition for community contributions",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "National Science Award",
      year: "2018",
      description: "Ranked 5th place in national science competition",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  const certifications = [
    {
      title: "Data Analytics Basics for Everyone",
      issuer: "IBM",
      url: "https://courses.edx.org/certificates/a49c4830ab9545ea8721455829b5e9a1",
    },
    {
      title: "Analyzing and Visualizing Data with Power BI",
      issuer: "Davidson College",
      url: "https://courses.edx.org/certificates/24781793b41e47789ba2ffeabedd07c9",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className={`py-20 bg-gradient-to-b ${colors.primary.light}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors.primary.medium}`}>
            Experience & Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional experience and academic achievements that showcase my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl font-semibold text-slate-900 mb-12 flex items-center"
            >
              <span className={`mr-4 p-3 rounded-lg text-white bg-gradient-to-r ${colors.primary.medium}`}>
                <Briefcase className="h-6 w-6" />
              </span>
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.primary.medium}`}>
                Professional Timeline
              </span>
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r ${colors.primary.medium}`}></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                    <div className="flex items-start">
                      <div className={`p-4 rounded-xl mr-6 ${exp.color} shadow-md`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">
                          {exp.title}
                        </h4>
                        <div className={`text-lg font-medium mb-3 ${colors.primary.text}`}>
                          {exp.company}
                        </div>
                        <div className="flex items-center text-slate-500 mb-4">
                          <Calendar className="h-5 w-5 mr-2" />
                          {exp.period}
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements + Certifications Section */}
          <div>
            {/* Honors & Awards */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl font-semibold text-slate-900 mb-12 flex items-center"
            >
              <span className={`mr-4 p-3 rounded-lg text-white bg-gradient-to-r ${colors.secondary.medium}`}>
                <Award className="h-6 w-6" />
              </span>
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.secondary.medium}`}>
                Honors & Awards
              </span>
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r ${colors.secondary.medium}`}></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                    <div className="flex items-start">
                      <div className={`p-4 rounded-xl mr-6 bg-gradient-to-br ${colors.secondary.light} shadow-md`}>
                        <Award className={`h-6 w-6 ${colors.secondary.text}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">
                          {achievement.title}
                        </h4>
                        <div className={`text-lg font-medium mb-3 ${colors.secondary.text}`}>
                          {achievement.year}
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-20"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-3xl font-semibold text-slate-900 mb-12 flex items-center"
              >
                <span className={`mr-4 p-3 rounded-lg text-white bg-gradient-to-r ${colors.accent.medium}`}>
                  <Sparkles className="h-6 w-6" />
                </span>
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.accent.medium}`}>
                  Certifications
                </span>
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-1 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r ${colors.accent.medium}`}></div>
                    <div className="relative bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                      <div className="flex items-start">
                        <div className={`p-4 rounded-xl mr-6 bg-gradient-to-br ${colors.accent.light} shadow-md`}>
                          <Sparkles className={`h-6 w-6 ${colors.accent.text}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-slate-900 mb-2">
                            {cert.title}
                          </h4>
                          <div className={`text-lg font-medium mb-4 ${colors.accent.text}`}>
                            {cert.issuer}
                          </div>
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <span className="mr-2">View Credential</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;