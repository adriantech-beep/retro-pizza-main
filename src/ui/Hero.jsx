import { Pointer, Rocket } from "lucide-react";
import "@fontsource/audiowide";
import "@fontsource/orbitron/700.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/press-start-2p";

import backgroundImage from "../assets/bg-images/retrogrid-bg.jpg";
import { HashLink } from "react-router-hash-link";
import UsePresenceData from "./UsePresenceData";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center w-full h-full  inset-0 bg-[#141423] text-[#fff8e7] min-h-screen flex flex-col justify-center items-center px-4 relative"
    >
      <h1 className="font-[Audiowide] text-4xl md:text-6xl  text-border-one">
        RETRO
      </h1>
      <h2 className="font-[Audiowide] text-4xl md:text-6xl text-border-two ">
        PIZZA
      </h2>

      <div className=" flex items-center gap-5">
        <Pointer
          className="text-[#ff4d00] drop-shadow-[0_0_10px_#ff4d00]"
          size={window.innerWidth > 768 ? 56 : 48}
        />

        <div className="inline-block border-y-4 border-[#ffe600] rounded-full px-6 py-1 shadow-[0_0_10px_#ffe600]">
          <p className="text-sm md:text-xl text-[#fff8e7] font-bold tracking-wide">
            HOT & FAST PIZZA DELIVERY
          </p>
        </div>

        <Rocket
          className="text-[#ff4d00] drop-shadow-[0_0_10px_#ff4d00]"
          size={window.innerWidth > 768 ? 56 : 48}
        />
      </div>

      <UsePresenceData />

      <HashLink
        to="/menu"
        className="bg-[#ff4d00] text-[#1a1a2e] font-bold py-3 px-8 rounded-lg text-xl hover:bg-[#ffe600] transition drop-shadow-[0_0_10px_#ff4d00] animate-pulse mt-2"
      >
        START ORDER
      </HashLink>
    </section>
  );
};

export default Hero;
