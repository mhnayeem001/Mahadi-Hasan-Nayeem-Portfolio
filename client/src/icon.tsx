// src/icons.tsx

import {
  FileSpreadsheet,
  FileCode,
  Database,
} from "lucide-react";

import {
  SiPython,
  SiR,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiGit,
  SiJupyter,
  SiAnaconda,
} from "react-icons/si";

// ✅ Correct default imports
import PowerBIIcon from "./PowerBIIcon";
import VSCodeIcon from "./VSCodeIcon";



export const skillIconMap: Record<string, JSX.Element> = {
  // Programming & ML
  Python: <SiPython className="text-[#3776AB] h-5 w-5" />,
  R: <SiR className="text-[#276DC3] h-5 w-5" />,
  Pandas: <SiPandas className="text-[#150458] h-5 w-5" />,
  NumPy: <SiNumpy className="text-[#013243] h-5 w-5" />,
  "Scikit-learn": <SiScikitlearn className="text-[#F7931E] h-5 w-5" />,
  TensorFlow: <SiTensorflow className="text-[#FF6F00] h-5 w-5" />,
  Keras: <SiKeras className="text-[#D00000] h-5 w-5" />,
  PyTorch: <SiPytorch className="text-[#EE4C2C] h-5 w-5" />,
  OpenCV: <SiOpencv className="text-[#5C3EE8] h-5 w-5" />,

  // Databases
  SQL: <Database className="text-sky-600 h-5 w-5" />,
  MySQL: <SiMysql className="text-[#00758F] h-5 w-5" />,

  // Data Analysis & BI
  Excel: <FileSpreadsheet className="text-green-600 h-5 w-5" />,
  "Power BI": <PowerBIIcon />,

  // Web Development
  HTML: <SiHtml5 className="text-orange-500 h-5 w-5" />,
  CSS: <SiCss3 className="text-blue-500 h-5 w-5" />,
  JavaScript: <SiJavascript className="text-yellow-400 h-5 w-5" />,
  PHP: <SiPhp className="text-indigo-700 h-5 w-5" />,
  AJAX: <FileCode className="text-gray-700 h-5 w-5" />,

  // Tools & Platforms
  Git: <SiGit className="text-orange-600 h-5 w-5" />,
  "Jupyter Notebook": <SiJupyter className="text-[#F37626] h-5 w-5" />,
  Anaconda: <SiAnaconda className="text-[#44A833] h-5 w-5" />,
  "VS Code": <VSCodeIcon />,
};
