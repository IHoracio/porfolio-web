import "../../styles/index.css";
import { useLanguage } from "../../contexts/LanguageContext.jsx";

function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="bg-gray-700 p-5 flex justify-between items-center shadow-lg">
      <span className="text-blue-100 md:ml-15">mariomartinmorilla.es</span>
      <div className="mr-2 md:mr-15">
        <div className="flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1">
          <button
            onClick={() => toggleLanguage()}
            className={`px-1 py-0.3 text-sm font-medium md:px-3 md:py-1 cursor-pointer ${
              language === "es"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ES
          </button>
          <button
            onClick={() => toggleLanguage()}
            className={`px-1 py-0.3 text-sm font-medium md:px-3 md:py-1 cursor-pointer ${
              language === "en"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
