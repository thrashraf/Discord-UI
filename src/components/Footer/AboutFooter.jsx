
const AboutFooter = () => {
  return (
    <div className=" max-w-[280px]">
        <h1 className=" text-4xl font-[Shippori Antique B1] font-black text-[#5865f2]">IMAGINE A PLACE</h1>

        <select className="bg-[#23272a] text-white mt-3 border-black">
            <option>English, USA</option>
        </select>

        <section className="flex justify-between max-w-[150px] mt-5">
          <span className="text-white cursor-pointer">
            <i className="fa-brands fa-twitter fa-lg"></i>
          </span>

          <span className="text-white cursor-pointer">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </span>

          <span className="text-white cursor-pointer">
            <i class="fa-brands fa-facebook-square fa-lg"></i>
          </span>

          <span className="text-white cursor-pointer">
            <i class="fa-brands fa-youtube fa-lg"></i>
          </span>
        </section>
    </div>
  )
}

export default AboutFooter