import cv from "../../assets/documents/CV-MarioMartinMorilla.pdf";
import useTranslations from "../hooks/useTranslations";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function SobreMi() {
  const t = useTranslations();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CV-MarioMartinMorilla.pdf";
    link.click();
  };

  const buttonVariants = {
    hover: { y: -2 },
    tap: { scale: 0.98 },
  };

  return (
    <div className="max-w-md mx-auto px-4 mt-10">
      {/* Botón Descargar CV */}
      <div className="flex justify-center mb-8 md:mb-10">
        <motion.button
          onClick={handleDownloadCV}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="relative overflow-hidden group w-full max-w-xs"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 rounded-lg"></div>
          <div className="relative flex items-center justify-center gap-2 py-3 px-6 text-white font-medium rounded-lg">
            <FiDownload className="text-lg" />
            <span>{t.downloadCV}</span>
          </div>
        </motion.button>
      </div>

      {/* Botones de contacto */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {/* GitHub */}
        <motion.a
          href="https://github.com/IHoracio"
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-3 flex flex-col items-center justify-center text-white transition-all border border-gray-500 sm:hidden"
        >
          <div className="bg-gray-800 p-2 rounded-full mb-2">
            <FiGithub className="text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium">GitHub</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/mariomartinmorilla/"
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-blue-700 hover:bg-blue-600 rounded-lg p-3 flex flex-col items-center justify-center text-white transition-all border border-blue-500 sm:hidden"
        >
          <div className="bg-blue-600 p-2 rounded-full mb-2">
            <FiLinkedin className="text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
        </motion.a>

        {/* Teléfono */}
        <motion.a
          href="tel:+34629436189"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-green-700 hover:bg-green-600 rounded-lg p-3 flex flex-col items-center justify-center text-white transition-all border border-green-500 sm:hidden"
        >
          <div className="bg-green-500 p-2 rounded-full mb-2">
            <FiPhone className="text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium">
            +34 629 43 61 89
          </span>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:mariomartinmorilla@gmail.com"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-blue-500 hover:bg-blue-400 rounded-lg p-3 flex flex-col items-center justify-center text-white transition-all border border-blue-400 sm:hidden"
        >
          <div className="bg-blue-400 p-2 rounded-full mb-2">
            <FiMail className="text-xl" />
          </div>
          <span className="text-[0.55rem] sm:text-sm font-medium">
            mariomartinmorilla@gmail.com
          </span>
        </motion.a>
      </div>

      {/* Telf y correo tablets/PC */}
      <div className="mt-6 hidden md:contents space-y-3">
        <motion.a
          href="https://github.com/IHoracio"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-all text-sm"
        >
          <FiGithub className="text-xl mr-2" />
          <span className="text-xs sm:text-sm font-medium">GitHub</span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mariomartinmorilla/"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all text-sm"
        >
          <FiLinkedin className="text-xl mr-2" />
          <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
        </motion.a>
        <motion.a
          href="tel:+34629436189"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all text-sm"
        >
          <FiPhone className="mr-2" />
          <span>+34 629 43 61 89</span>
        </motion.a>

        <motion.a
          href="mailto:mariomartinmorilla@gmail.com"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition-all text-sm"
        >
          <FiMail className="mr-2" />
          <span>mariomartinmorilla@gmail.com</span>
        </motion.a>
      </div>
    </div>
  );
}
