import profilePic from '../../assets/images/profile.png'
import aureola from '../../assets/images/aureolaBlue.png';
export default function SobreMi() {
  return (
    <>
      <div className="relative">
        <img src={aureola} alt="Decoracion" className='w-75 mx-auto mb-3 mt-5 md:mt-10 md:w-150 md:h-20 lg:w-5xl lg:h-15xl lg:mx-auto' />
        <h1 
          className="text-4xl font-bold text-center mt-0 md:text-7xl md:mt-0 lg:text-8xl lg:mt-5 relative"
          style={{
            opacity: 1,
            transform: 'scale(1)',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
          }}
        >
          Sobre Mí😁
        </h1>
      </div>
      <img src={profilePic} alt="Imagen de Perfil" className="w-32 h-32 rounded-lg shadow-md border-2 border-gray-300 object-cover mx-auto mt-10 md:w-64 md:h-64" />
      <p className="ml-10 mr-10 text-center text-lg mt-5 md:text-xl md:mt-10 lg:ml-60 lg:mr-60">
        ¡Hola! Soy Mario, un apasionado desarrollador web con experiencia en la creación de aplicaciones modernas y eficientes. Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
      </p>
    </>
  );
}