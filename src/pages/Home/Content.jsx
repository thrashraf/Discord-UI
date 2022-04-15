import { react, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Content = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div>

      <section data-aos="fade-up" className="flex justify-between max-w-7xl m-auto items-center h-[660px] px-10">
        <img
          src="invite_only_landing.svg"
          className=" object-contain w-[60%]"
        />

        <section className="w-[30%]">
          <h2 className=" text-[48px] font-[Shippori Antique B1] font-bold tracking-tighter leading-[50px] mt-6">
            Create an invite-only place where you belong
          </h2>

          <p className="mt-10 leading-8">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </section>
      </section>

      <div data-aos="fade-up" className="w-full bg-gray-100">
        <section className="flex justify-between max-w-7xl m-auto items-center h-[660px] px-10 bg-gray-100">
        <section className="w-[30%]">
            <h2 className=" text-[48px] font-[Shippori Antique B1] font-bold tracking-tighter leading-[50px] mt-6">
            Where hanging out is easy
            </h2>

            <p className="mt-10 leading-8 text-lg">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
            </p>
        </section>

        <img
            src="hanging_out_easy_landing.svg"
            className=" object-contain w-[60%]"
        />
        </section>
      </div>

      <section data-aos="fade-up" className="flex justify-between max-w-7xl m-auto items-center h-[660px] px-10">
        <img src="fandom_landing.svg" className=" object-contain w-[60%]" />

        <section className="w-[30%]">
          <h2 className=" text-[48px] font-[Shippori Antique B1] font-bold tracking-tighter leading-[50px] mt-6">
            From few to a fandom
          </h2>

          <p className="mt-10 leading-8 text-lg">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </section>
      </section>

      <div data-aos="fade-up" className="w-full bg-gray-100">
        <section className="flex flex-col max-w-7xl m-auto items-center px-10 bg-gray-100">
            <section className=" text-center mt-28 max-w-4xl">
            <h2 className=" text-[48px] font-[Shippori Antique B1] font-black tracking-tighter leading-[50px] mt-6">
                RELIABLE TECH FOR STAYING CLOSE
            </h2>

            <p className=" leading-6 text-lg mt-3">
                Low-latency voice and video feels like you’re in the same room. Wave
                hello over video, watch friends stream their games, or gather up and
                have a drawing session with screen share.
            </p>
            </section>

            <img
            src="just_chiling_landing.svg"
            className=" object-contain w-[95%]"
            />


            <div className="max-w-2xl my-32 text-center bg-[url('/tiny_stars_landing.svg')] bg-no-repeat bg-contain pt-10 ">
                <h1 className="font-[Shippori Antique B1] font-bold text-3xl">Ready to start your journey</h1>
                <button className="bg-blue-400 m-auto rounded-3xl text-[17px] px-8 py-3 text-white  hover:shadow-2xl mt-5 flex">
                  
                 Download for Windows
                </button>
            </div>
        </section>
      </div>
    </div>
  );
};
