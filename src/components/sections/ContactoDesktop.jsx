import { FiGithub, FiLinkedin, FiPhone, FiMail, FiCopy } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactoDesktop({
  buttonVariants,
  copiedPhone,
  copiedEmail,
  handleCopyPhone,
  handleCopyEmail,
}) {
  return (
    <div className="mt-6 hidden md:contents space-y-3">
      <motion.a
        href="https://github.com/IHoracio"
        variants={buttonVariants}
        target="_blank"
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
        target="_blank"
        whileHover="hover"
        whileTap="tap"
        className="flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all text-sm"
      >
        <FiLinkedin className="text-xl mr-2" />
        <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
      </motion.a>

      <div className="flex items-center gap-2">
        <motion.a
          href="tel:+34629436189"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-all text-sm flex-1 cursor-pointer"
        >
          <FiPhone className="mr-2" />
          <span>+34 629 43 61 89</span>
        </motion.a>
        <motion.button
          onClick={handleCopyPhone}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-green-600 hover:bg-green-500 text-white py-2 px-3 rounded-lg transition-all text-sm cursor-pointer"
          title="Copiar teléfono"
        >
          <FiCopy className={copiedPhone ? "text-green-200" : ""} />
        </motion.button>
      </div>

      <div className="flex items-center gap-2">
        <motion.a
          href="mailto:mariomartinmorilla@gmail.com"
          variants={buttonVariants}
          target="_blank"
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center bg-blue-400 hover:bg-blue-300 text-white py-2 px-4 rounded-lg transition-all text-sm flex-1 cursor-pointer"
        >
          <FiMail className="mr-2" />
          <span>mariomartinmorilla@gmail.com</span>
        </motion.a>
        <motion.button
          onClick={handleCopyEmail}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-blue-400 hover:bg-blue-300 text-white py-2 px-3 rounded-lg transition-all text-sm cursor-pointer"
          title="Copiar email"
        >
          <FiCopy className={copiedEmail ? "text-blue-200" : ""} />
        </motion.button>
      </div>
    </div>
  );
}
