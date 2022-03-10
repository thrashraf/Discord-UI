import AboutFooter from "./AboutFooter"
import { Link } from "./Link";

export const Footer = () => {
  return (
    <div className=" bg-[#23272a] h-[450px] py-20 px-10 ">
        <section className="flex">
            <AboutFooter />    
            <Link />   
        </section>

        <span className="flex border-b border-blue-700 mt-10 shadow-md shadow-white" />

        <section className="flex justify-between">
            <img src="/logo.svg" className="object-contain w-[12%] my-7"/>

            <button className="px-2 bg-[#5865f2] h-8 w-20 rounded-2xl my-7 text-sm text-white">
                Sign up
            </button>
        </section>
    </div>
  )
}

export default Footer;
