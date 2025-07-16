import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, BarChart2, Database, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const BALLOON_COLORS = [
  "#FF4B5C",
  "#FF9F1C",
  "#2EC4B6",
  "#3A86FF",
  "#8338EC",
  "#FF6F91",
];

const Balloon = ({ left, color, size }: { left: number; color: string; size: number }) => (
  <motion.div
    initial={{ y: 0, opacity: 1 }}
    animate={{ y: -800, opacity: 0 }}
    transition={{ duration: 6, ease: "easeOut" }}
    className="absolute bottom-0"
    style={{ left: `${left}%`, width: size, height: size * 1.3 }}
  >
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="50" rx="45" ry="60" fill={color} />
      <path d="M50 110 C55 115, 45 115, 50 120" stroke={color} strokeWidth="3" fill="none" />
      <line x1="50" y1="110" x2="50" y2="130" stroke={color} strokeWidth="2" />
    </svg>
  </motion.div>
);

const Hero = () => {
  const [balloons, setBalloons] = useState<
    { id: string; left: number; color: string; size: number }[]
  >([]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const launchBalloons = () => {
    const newBalloons = Array.from({ length: 12 }).map(() => ({
      id: uuidv4(),
      left: Math.random() * 90 + 5,
      color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      size: 40 + Math.random() * 40,
    }));
    setBalloons(newBalloons);
    setTimeout(() => setBalloons([]), 7000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      {/* Balloon Container */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence>
          {balloons.map(({ id, left, color, size }) => (
            <Balloon key={id} left={left} color={color} size={size} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Circular Profile Picture */}
        <div className="relative mx-auto mb-8 w-40 h-40 group cursor-pointer" onClick={launchBalloons}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
          <img 
             src="https://raw.githubusercontent.com/mhnayeem001/Picture/main/IMG_8484.png"  
            alt="Mahadi Hasan Nayeem"
            className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-xl z-10"
          />
          <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg z-20">
            <BarChart2 className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mahadi Hasan Nayeem</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
          Data Analyst & BI Developer
        </h2>

        {/* Description with animated underline */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I transform complex datasets into <span className="relative">
              <span className="font-medium text-gray-800">actionable insights</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400/30 -z-10"></span>
            </span> through advanced analytics and compelling visualizations.
          </p>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </div>

        {/* Stats Visualization */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[{
            icon: <Database className="h-6 w-6" />, value: "100K+", label: "Data Points" },
            {
              icon: <TrendingUp className="h-6 w-6 cursor-pointer" onClick={() => scrollToSection("projects")} />, value: "20+", label: "Projects" },
            {
              icon: <BarChart2 className="h-6 w-6" />, value: "10+", label: "Dashboards" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Contact Me <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-medium shadow-sm hover:shadow-md transition-all"
          >
            <a href="/Mahadi-Hasan-Nayeem-CV.pdf" download className="flex items-center gap-2">
              Download CV <Download className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;