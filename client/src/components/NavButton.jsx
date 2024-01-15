import { useNavigate } from "react-router-dom"
function NavButton({ path, text }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/" + path);
  }

  return (
    <button
      className="bg-teal-600 cursor-pointer text-center hover:bg-teal-500 text-teal-950 transition-colors font-bold py-2 px-4 rounded-lg md:text-2xl text-xl w-full uppercase"
      onClick={handleNavigate}
    >
      { text }
    </button>
  );
}

export default NavButton
