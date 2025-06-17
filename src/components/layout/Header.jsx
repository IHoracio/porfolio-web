import '../../styles/index.css';

function Header() {

  return (
    <div className="bg-gray-700 p-5 flex justify-between items-center shadow-lg">
      <span className="text-blue-100 md:ml-15">mariomartinmorilla.es</span>
      <div className="mr-2 md:mr-15">
        <button
          type="button"
          className="text-[1rem]"
        >
          EN / ES
        </button>
      </div>
    </div>
  );
}

export default Header;