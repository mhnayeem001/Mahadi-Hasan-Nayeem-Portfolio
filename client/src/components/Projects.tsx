import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description:
        "Interactive dashboard analyzing sales performance across multiple channels, resulting in 23% increase in conversion rates.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Interactive sales analytics dashboard showing revenue trends and KPIs",
      tags: ["Python", "Tableau", "SQL"],
    },
    {
      title: "Customer Segmentation Analysis",
      description:
        "Machine learning model to segment customers based on purchase behavior, improving targeted marketing ROI by 40%.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Customer segmentation analysis with demographic charts and behavioral patterns",
      tags: ["Python", "K-Means", "Pandas"],
    },
    {
      title: "Predictive Analytics Model",
      description:
        "Time series forecasting model for inventory management, reducing stockouts by 35% and optimizing supply chain costs.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Predictive analytics model showing forecasting charts and trend analysis",
      tags: ["R", "ARIMA", "Time Series"],
    },
    {
      title: "Business Intelligence Dashboard",
      description:
        "Executive dashboard consolidating KPIs from multiple sources, enabling data-driven decision making across departments.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Business intelligence dashboard with KPI metrics and performance indicators",
      tags: ["Power BI", "DAX", "SQL Server"],
    },
    {
      title: "A/B Testing Analysis",
      description:
        "Statistical analysis of website experiments, validating design changes that increased user engagement by 28%.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "A/B testing analysis dashboard showing conversion rates and statistical significance",
      tags: ["Python", "Scipy", "Statistics"],
    },
    {
      title: "Market Research Analysis",
      description:
        "Comprehensive market analysis identifying growth opportunities and competitive positioning strategies for product launch.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Market research analysis with demographic data and consumer behavior insights",
      tags: ["R", "ggplot2", "Survey Analysis"],
    },
  ];

  const getTagColor = (tag: string) => {
    const colors = {
      Python: "bg-primary/10 text-primary",
      R: "bg-primary/10 text-primary",
      SQL: "bg-emerald-500/10 text-emerald-500",
      Tableau: "bg-accent/10 text-accent",
      "Power BI": "bg-accent/10 text-accent",
      Pandas: "bg-emerald-500/10 text-emerald-500",
      "K-Means": "bg-accent/10 text-accent",
      ARIMA: "bg-accent/10 text-accent",
      "Time Series": "bg-emerald-500/10 text-emerald-500",
      DAX: "bg-accent/10 text-accent",
      "SQL Server": "bg-emerald-500/10 text-emerald-500",
      Scipy: "bg-accent/10 text-accent",
      Statistics: "bg-emerald-500/10 text-emerald-500",
      ggplot2: "bg-accent/10 text-accent",
      "Survey Analysis": "bg-emerald-500/10 text-emerald-500",
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
