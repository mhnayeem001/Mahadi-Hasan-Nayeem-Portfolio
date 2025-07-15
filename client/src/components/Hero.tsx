import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Computer Science &{" "}
              <span className="text-primary">Data Science</span> Student
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Passionate about leveraging data analysis, machine learning, and BI 
              Development to drive innovation. Specializing in Computer Vision, 
              Deep Learning, and Business Intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-blue-600 text-white px-8 py-3 text-base font-medium"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-base font-medium"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Data analytics dashboard with charts and graphs on multiple monitors"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary">3.78</div>
              <div className="text-sm text-slate-600">CGPA</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-accent">8+</div>
              <div className="text-sm text-slate-600">Major Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
