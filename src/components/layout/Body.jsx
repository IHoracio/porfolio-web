import '../../styles/index.css';
import TitleAnimation from '../hooks/dynamicTitle';
import SobreMi from '../sections/sobreMi';
import Contacto from '../sections/contacto';
import Proyectos from '../sections/proyectos';

function Body() {
  return (
    <>
      <TitleAnimation />
      <SobreMi />
      <Contacto />
      <Proyectos />
    </>
  );
}

export default Body;