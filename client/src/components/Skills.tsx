import { motion } from "framer-motion";
import {
  Code,
  Database,
  BarChart,
  Brain,
  Globe2,
  LayoutGrid,
} from "lucide-react";
import { skillIconMap } from "../icon"; // Make sure this is correctly linked

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "from-indigo-500 to-purple-500",
    skills: ["Python", "R"],
  },
  {
    title: "Data Analysis & Visualization",
    icon: BarChart,
    color: "from-yellow-400 to-orange-500",
    skills: ["Excel", "Power BI"],
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: Brain,
    color: "from-pink-500 to-red-500",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: ["SQL", "MySQL"],
  },
  {
    title: "Web Development",
    icon: Globe2,
    color: "from-blue-500 to-cyan-500",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "AJAX"],
  },
  {
    title: "Tools & Libraries",
    icon: LayoutGrid,
    color: "from-rose-400 to-pink-500",
    skills: ["VS Code", "Git", "Jupyter Notebook", "Anaconda"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A hands-on developer with a deep focus on data, AI, and web technologies.
            Always evolving with the tools of tomorrow.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 backdrop-blur-md bg-white/70 dark:bg-slate-800/60 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                variants={cardVariants}
              >
                <div
                  className={`absolute -top-5 -right-5 w-40 h-40 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300 z-0`}
                />
                <div className="relative z-10 flex items-center mb-5">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-tr ${category.color} text-white mr-4`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="relative z-10 text-slate-700 dark:text-slate-300 space-y-2 text-[15px]">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-2">
                      {skillIconMap[skill] ?? (
                        <span className="h-5 w-5 inline-block bg-gray-300 dark:bg-slate-600 rounded" />
                      )}
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;