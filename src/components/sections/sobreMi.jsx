import profilePic from '../../assets/images/profile.png'
import aureola from '../../assets/images/aureolaBlue.png';
export default function SobreMi() {
  return (
    <>
      <div className="relative">
        <img src={aureola} alt="Decoracion" className='w-75 mx-auto mb-3 mt-10 md:mt-10 md:w-150 md:h-20 lg:w-5xl lg:h-15xl lg:mx-auto' />
        <h3 
          className="text-3xl font-bold text-center mt-10 md:text-5xl md:mt-7 lg:text-7xl lg:mt-7 relative"
          style={{
            opacity: 1,
            transform: 'scale(1)',
            textShadow: "0 0 10px rgba(180, 210, 255, 0.8)",
          }}
        >
          &lt;Contactame 😁/&gt;
        </h3>
      </div>
      <img src={profilePic} alt="Imagen de Perfil" className="w-36 h-36 rounded-lg shadow-md border-2 border-gray-300 object-cover mx-auto mt-10 md:w-64 md:h-64 lg:mt-15" style={{ objectPosition: "50% 0%" }} />
      <p className="font-mono ml-10 mr-10 text-center text-lg mt-10 md:text-xl md:mt-10 lg:ml-60 lg:mr-60">
        ¡Hola! Soy Mario, un apasionado desarrollador web con experiencia en la creación de aplicaciones modernas y eficientes. Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
      </p>
    </>
  );
}