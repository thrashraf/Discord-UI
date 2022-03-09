import { useNavigate } from "react-router-dom";
import nav from "../../assets/nav";


const Navbar = () => {

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/')
  }

  return (
    <div className="w-full bg-[#404eed]">
      <div className="w-full flex justify-between bg-[#404eed] py-5 px-10 max-w-6xl m-auto">
        <img src="/logo.svg" className="object-contain w-[10%]" onClick={toHome}/>
  
        <ul className=" flex justify-around w-[45%] text-white font-medium text-[14px] items-center ">
          {nav.map((navItem, index) => {
            return(
              <li key={index} className="cursor-pointer hover:underline">{navItem}</li>
            )
          })}
        </ul>
        
        <button className=" bg-white rounded-3xl text-xs font-medium px-3 py-[10px] text-gray-500 hover:text-blue-500 hover:shadow-2xl"> Open Discord </button>
      </div>
    </div>
    
  )
}

export default Navbar;
