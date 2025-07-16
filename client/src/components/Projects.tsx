import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart2, Cpu, BrainCircuit, Database, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Professional color palette
  const colors = {
    primary: {
      light: "bg-blue-100 text-blue-800",
      medium: "bg-blue-600 text-white",
      dark: "bg-blue-800 text-white",
      text: "text-blue-600",
      border: "border-blue-200"
    },
    secondary: {
      light: "bg-purple-100 text-purple-800",
      medium: "bg-purple-600 text-white",
      dark: "bg-purple-800 text-white",
      text: "text-purple-600",
      border: "border-purple-200"
    },
    accent: {
      light: "bg-emerald-100 text-emerald-800",
      medium: "bg-emerald-600 text-white",
      dark: "bg-emerald-800 text-white",
      text: "text-emerald-600",
      border: "border-emerald-200"
    },
    neutral: {
      light: "bg-gray-100 text-gray-800",
      medium: "bg-gray-600 text-white",
      dark: "bg-gray-800 text-white",
      text: "text-gray-600",
      border: "border-gray-200"
    }
  };

  // Projects data with all 9 projects
  const projects = [
    {
      title: "Power BI World Bank Data Analysis",
      description: "Analyze global economic and social indicators from World Bank data. Create interactive Power BI dashboards to explore country-level statistics. Include environmental data such as NASA global temperature records.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Power BI World Bank Data Analysis",
      tags: ["Power BI", "Data Analysis", "Environment"],
      githubUrl: "https://github.com/mhnayeem001/Power-BI-World-Bank-Data-Analysis",
      category: "Power BI",
      icon: <BarChart2 className="h-5 w-5" />
    },
    {
      title: "Sales Performance Dashboard Analysis",
      description: "Developed a comprehensive Power BI Sales Dashboard using SQL Server and DAX with interactive reports.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Sales Performance Dashboard",
      tags: ["Power BI", "Data Analysis", "DAX"],
      githubUrl: "https://github.com/mhnayeem001/Power-BI-Sales-Dashboard-Project",
      category: "Power BI",
      icon: <BarChart2 className="h-5 w-5" />
    },
    {
      title: "US Economic & Demographic Analysis",
      description: "Interactive Power BI dashboards analyzing U.S. Census and economic datasets across states.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "US Economic Dashboard",
      tags: ["Power BI", "Data Analysis", "Economics"],
      githubUrl: "https://github.com/mhnayeem001/Power-BI-Trends-Across-US-States-Data-Analysis-",
      category: "Power BI",
      icon: <BarChart2 className="h-5 w-5" />
    },
    {
      title: "Hotel Customer Data Analysis",
      description: "Power BI dashboards visualizing hotel customer behavior and KPIs with Power Query transformations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Hotel Data Dashboard",
      tags: ["Power BI", "DAX", "Power Query"],
      githubUrl: "https://github.com/mhnayeem001/Power-BI-Hotel-Management-Data-Analysis-",
      category: "Power BI",
      icon: <BarChart2 className="h-5 w-5" />
    },
    {
      title: "Bengali License Plate Recognition",
      description: "License plate recognition system using MobileNet and Real-ESRGAN for image enhancement.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "License Plate Recognition",
      tags: ["Python", "MobileNet", "Real-ESRGAN"],
      githubUrl: "https://github.com/mhnayeem001/CVPR",
      category: "Machine Learning",
      icon: <BrainCircuit className="h-5 w-5" />
    },
    {
      title: "CNN-Based Attendance System",
      description: "Facial recognition attendance system using CNN, OpenCV and TensorFlow with real-time detection.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Facial Recognition System",
      tags: ["Python", "OpenCV", "TensorFlow"],
      githubUrl: "https://github.com/mhnayeem001/CVPR",
      category: "Machine Learning",
      icon: <BrainCircuit className="h-5 w-5" />
    },
    {
      title: "Stroke Prediction Analysis",
      description: "Stroke risk prediction using statistical analysis and correlation modeling in R with visualization.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Stroke Prediction Analysis",
      tags: ["R", "ggplot2", "Statistics"],
      githubUrl: "https://github.com/mhnayeem001/Data-Science",
      category: "Data Science",
      icon: <Database className="h-5 w-5" />
    },
    {
      title: "Wi-Steer Racing Controller",
      description: "Wireless ESP32 steering wheel controller for PC racing games with sensor integration.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Racing Controller",
      tags: ["ESP32", "IoT", "HCI"],
      githubUrl: "https://www.linkedin.com/posts/mahadihasannayeem_check-out-the-demo-video-details-we-activity-7344292748415422464-wR4e",
      category: "IoT",
      icon: <Cpu className="h-5 w-5" />
    },
    {
      title: "Elderly Care Monitoring System",
      description: "Web application for elderly care with real-time reporting using PHP, JavaScript and AJAX.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Elderly Care System",
      tags: ["HTML", "PHP", "JavaScript"],
      githubUrl: "https://github.com/mhnayeem001/Web-Tech",
      category: "Web Development",
      icon: <Code className="h-5 w-5" />
    }
  ];

  const categories = [
    "All",
    "Power BI",
    "Machine Learning",
    "Data Science",
    "IoT",
    "Web Development"
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTagColor = (tag: string) => {
    const colorMap: Record<string, string> = {
      // Power BI tags
      "Power BI": colors.primary.light,
      "Data Analysis": colors.primary.light,
      "DAX": colors.primary.light,
      "Power Query": colors.primary.light,
      "Economics": colors.primary.light,
      "Environment": colors.primary.light,

      // Machine Learning tags
      "Python": colors.secondary.light,
      "TensorFlow": colors.secondary.light,
      "OpenCV": colors.secondary.light,
      "MobileNet": colors.secondary.light,
      "Real-ESRGAN": colors.secondary.light,

      // Data Science tags
      "R": colors.accent.light,
      "ggplot2": colors.accent.light,
      "Statistics": colors.accent.light,

      // Other tags
      "ESP32": colors.neutral.light,
      "IoT": colors.neutral.light,
      "HCI": colors.neutral.light,
      "HTML": colors.neutral.light,
      "PHP": colors.neutral.light,
      "JavaScript": colors.neutral.light
    };
    return colorMap[tag] || colors.neutral.light;
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Power BI": return colors.primary;
      case "Machine Learning": return colors.secondary;
      case "Data Science": return colors.accent;
      default: return colors.neutral;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming raw data into actionable insights through innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const categoryColor = getCategoryColor(category);
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? `${categoryColor.medium} text-white shadow-md`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const categoryColor = getCategoryColor(project.category);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ scale: 1.03, y: -10, boxShadow: "0 0 20px 3px rgba(72, 199, 255, 0.6)" }}
                className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden cursor-pointer flex flex-col h-[480px] max-h-[480px]"
              >
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={`absolute top-3 right-3 p-3 rounded-full ${categoryColor.light} shadow-md flex items-center justify-center`}
                    title={project.category}
                  >
                    {project.icon}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 max-h-24 overflow-hidden">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide
                            ${getTagColor(tag)} select-none`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-800 flex items-center gap-1 font-semibold tracking-wide transition-colors"
                      >
                        View Project <ExternalLink className="h-5 w-5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/mhnayeem001?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;