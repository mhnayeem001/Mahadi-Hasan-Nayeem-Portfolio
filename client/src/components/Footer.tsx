import { Linkedin, Github, Facebook, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [isLight, setIsLight] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleNameColor = () => {
    setIsLight(!isLight);
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            {/* Toggle Color on Click */}
            <h3
              onClick={toggleNameColor}
              className={`text-2xl font-bold mb-4 cursor-pointer transition-colors duration-300 ${
                isLight ? "text-slate-300" : "text-white"
              }`}
            >
              Mahadi Hasan Nayeem
            </h3>

            <p className="text-slate-400 mb-4">
              Computer Science & Engineering student passionate about data
              science, machine learning, and business intelligence solutions.
            </p>

            {/* Social Icons with Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mahadihasannayeem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://github.com/mhnayeem001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://x.com/mhnayem79521711?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://www.facebook.com/mh.nayeem.01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://www.instagram.com/mahadi_hasan_nayem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400">Data Analysis</span>
              </li>
              <li>
                <span className="text-slate-400">Machine Learning</span>
              </li>
              <li>
                <span className="text-slate-400">Computer Vision</span>
              </li>
              <li>
                <span className="text-slate-400">Power BI Development</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Mahadi Hasan Nayeem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;