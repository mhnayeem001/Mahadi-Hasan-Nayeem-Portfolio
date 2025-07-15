import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bengali License Plate Recognition System",
      description:
        "Developed a Bengali license plate recognition system using MobileNet for detection and Real-ESRGAN for image enhancement, applying deep learning techniques to improve accuracy on low-quality images.",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Bengali license plate recognition system with deep learning models",
      tags: ["Python", "MobileNet", "Real-ESRGAN"],
    },
    {
      title: "CNN-Based Automatic Attendance System",
      description:
        "Built a facial recognition-based attendance system using CNN, leveraging Python, OpenCV, and TensorFlow for real-time detection and automated attendance logging.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Facial recognition attendance system using CNN",
      tags: ["Python", "OpenCV", "TensorFlow"],
    },
    {
      title: "Stroke Prediction & Correlation Analysis",
      description:
        "Conducted stroke risk prediction using statistical analysis and correlation modeling in R, with data visualization through ggplot2, ggcorrplot, and various statistical testing methods.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Stroke prediction analysis with correlation visualizations",
      tags: ["R", "ggplot2", "Statistics"],
    },
    {
      title: "Hotel Customer Data Analysis Dashboard",
      description:
        "Designed interactive Power BI dashboards to visualize hotel customer behavior and KPIs, using Power Query and DAX for data transformation and generating actionable business insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Hotel customer data analysis dashboard in Power BI",
      tags: ["Power BI", "DAX", "Power Query"],
    },
    {
      title: "Wi-Steer: Wireless ESP32 Racing Controller",
      description:
        "Designed and built a wireless steering wheel controller using ESP32 and sensors to enable intuitive gameplay for PC racing games, focusing on human-computer interaction principles.",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Wireless ESP32-based steering wheel controller for gaming",
      tags: ["ESP32", "IoT", "HCI"],
    },
    {
      title: "Elderly Care and Monitoring System",
      description:
        "Built a responsive web application for elderly care using HTML, CSS, JavaScript, PHP, and AJAX, integrating real-time reporting, health tracking, and caregiver communication features.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Elderly care monitoring system web application",
      tags: ["HTML", "PHP", "JavaScript"],
    },
    {
      title: "US Economic & Demographic Analysis",
      description:
        "Conducted multi-dimensional analysis of US census and economic data, creating comparative Power BI reports on state-wise GDP, population, and education indicators.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "US economic and demographic analysis dashboard",
      tags: ["Power BI", "Data Analysis", "Economics"],
    },
    {
      title: "World Bank Development Indicators Analysis",
      description:
        "Analyzed World Bank development indicators such as GDP, Population, Income and developed global trend dashboards in Power BI to support evidence-based policy and research.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "World Bank development indicators analysis dashboard",
      tags: ["Power BI", "Global Data", "Policy Analysis"],
    },
  ];

  const getTagColor = (tag: string) => {
    const colors = {
      Python: "bg-primary/10 text-primary",
      R: "bg-primary/10 text-primary",
      "Power BI": "bg-accent/10 text-accent",
      TensorFlow: "bg-emerald-500/10 text-emerald-500",
      OpenCV: "bg-emerald-500/10 text-emerald-500",
      MobileNet: "bg-emerald-500/10 text-emerald-500",
      "Real-ESRGAN": "bg-emerald-500/10 text-emerald-500",
      ggplot2: "bg-accent/10 text-accent",
      Statistics: "bg-emerald-500/10 text-emerald-500",
      DAX: "bg-accent/10 text-accent",
      "Power Query": "bg-accent/10 text-accent",
      ESP32: "bg-primary/10 text-primary",
      IoT: "bg-primary/10 text-primary",
      HCI: "bg-primary/10 text-primary",
      HTML: "bg-emerald-500/10 text-emerald-500",
      PHP: "bg-emerald-500/10 text-emerald-500",
      JavaScript: "bg-emerald-500/10 text-emerald-500",
      "Data Analysis": "bg-accent/10 text-accent",
      Economics: "bg-accent/10 text-accent",
      "Global Data": "bg-accent/10 text-accent",
      "Policy Analysis": "bg-accent/10 text-accent",
    };
    return colors[tag as keyof typeof colors] || "bg-slate-100 text-slate-600";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing real-world data analysis projects and their business
            impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    variant="link"
                    className="text-primary hover:text-blue-600 font-medium p-0"
                  >
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-500 hover:text-slate-700"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-500 hover:text-slate-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-blue-600 text-white px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
