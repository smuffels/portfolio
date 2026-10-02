import type { Translation } from "../data/translations";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Experience({ t }: { t: Translation }) {
  return (
    <section
      id="experience"
      className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="relative inline-block">
        <img
          src="src/assets/images/gameboy_advanced.svg"
          className="w-368"
        ></img>
        <button className="bg-background text-default hover:text-highlight rounded-full absolute block top-[34.7%] left-[80.4%]">
          <AiOutlineCheck className="size-12 font-semibold" />
        </button>
        <button className="bg-background text-default hover:text-highlight rounded-full absolute top-[37.6%] left-[73.6%]">
          <AiOutlineClose className="size-12 font-semibold" />
        </button>
      </div>
      {/*<div className="bg-elementbg rounded-lg border-2 border-default w-92 md:w-184 h-8 md:h-64 break-all"></div>*/}
    </section>
  );
}

export default Experience;
