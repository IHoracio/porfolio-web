import cv from "../../assets/documents/CV-MarioMartinMorilla.pdf";
import useTranslations from "../hooks/useTranslations";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import ContactoMobile from "./ContactoMobile";
import ContactoDesktop from "./ContactoDesktop";


export default function SobreMi() {
  const t = useTranslations();
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CV-MarioMartinMorilla.pdf";
    link.click();
  };

  const handleCopyPhone = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("+34629436189");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("mariomartinmorilla@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const buttonVariants = {
    hover: { y: -2 },
    tap: { scale: 0.98 },
  };

  return (
    <div className="max-w-md mx-auto px-4 mt-10">
      <div className="flex justify-center mb-8 md:mb-10">
        <motion.button
          onClick={handleDownloadCV}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="relative overflow-hidden group w-full max-w-xs cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 rounded-lg"></div>
          <div className="relative flex items-center justify-center gap-2 py-3 px-6 text-white font-medium rounded-lg">
            <FiDownload className="text-lg" />
            <span>{t.downloadCV}</span>
          </div>
        </motion.button>
      </div>

      {/* Móvil */}
      <ContactoMobile buttonVariants={buttonVariants} />

      {/* PC */}
      <ContactoDesktop
        buttonVariants={buttonVariants}
        copiedPhone={copiedPhone}
        copiedEmail={copiedEmail}
        handleCopyPhone={handleCopyPhone}
        handleCopyEmail={handleCopyEmail}
      />
    </div>
  );
}
