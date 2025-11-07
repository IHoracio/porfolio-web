import { FiGithub, FiLinkedin, FiPhone, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactoMobile({ buttonVariants }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
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
  );
}
