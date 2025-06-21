import '../../styles/index.css';

function Footer(){
    const currentYear = new Date().getFullYear();

return (
    <>
    <div className="bg-gray-700 p-5 flex justify-between items-center shadow-lg">
        <span className="text-blue-100 md:ml-15">mariomartinmorilla.es</span>
        <span>© {currentYear} Mario Martin Morilla</span>
    </div>
    </>
  );
}
export default Footer