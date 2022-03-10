export const Header = () => {

  return (
    <div className="h-[490px] w-full bg-[#404eed] bg-[url('/center_bg_landing_header.svg')] bg-center bg-cover m-auto overflow-x-hidden">
      <div className="max-w-[1400px] m-auto relative w-full h-full flex flex-col justify-center text-center">
        <img
          src="left_bg_landing_header.svg"
          className="object-contain w-[50%] absolute -left-80 bottom-0"
        />
        <section className="text-white leading-8 text-lg">
          <h1 className="font-[Shippori Antique B1] text-6xl font-black mb-10">
            IMAGINE A PLACE...
          </h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community.
          </p>

          <p>
            Where just you and a handful of friends can spend time together. A
            place that makes it easy
          </p>
          <p>to talk every day and hang out more often.</p>

          <div className="flex justify-between max-w-lg m-auto">
            <button className="bg-white rounded-3xl text-[17px] px-7 py-2 text-black hover:text-blue-500 hover:shadow-2xl mt-5">
              Download for Windows
            </button>

            <button className="bg-black rounded-3xl text-[17px] px-7 py-2 text-white  hover:bg-gray-700 mt-5">
              Open Discord in browser
            </button>
          </div>

          <img
            src="right_bg_landing_header.svg"
            className="object-contain w-[50%] absolute -right-80 bottom-0"
          />
        </section>
      </div>
    </div>
  );
};
