import es from '../../translations/es';
import en from '../../translations/en';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function SobreMi() {
  const { language } = useLanguage();
  const t = language === 'es' ? es : en;
  return (
    <>
      <div className="relative">
        <h3 
          className="text-3xl font-bold text-center mt-10 md:text-5xl md:mt-15 lg:text-7xl relative"
          style={{
            opacity: 1,
            transform: 'scale(1)',
            textShadow: "0 0 10px rgba(180, 210, 255, 0.8)",
          }}
        >
          &lt;{t.proyectsTitle}/&gt;
        </h3>
      </div>
      
    </>
  );
}