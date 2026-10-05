import type { Translation } from "../data/translations";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

function Experience({ t }: { t: Translation }) {
  const experience = {
    work: {
      label: t.workExperience,
      items: [
        { label: "Cybersystems", text: t.cybersystems },
        { label: "Flumerics", text: t.flumerics },
      ],
    },
    club: {
      label: t.clubExperience,
      items: [
        { label: "Alias", text: t.alias },
        { label: "ZUR", text: t.zur },
        { label: "Frackwoche", text: t.frackwoche },
      ],
    },
  };

  return (
    <section
      id="experience"
      className="flex-1 flex flex-col items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="bg-elementbg rounded-lg border-2 border-default w-92 md:w-184 h-8 md:h-64 break-all"></div>
      <div className="relative inline-block">
        <img
          src="src/assets/images/nintendo_console.svg"
          className="w-92 md:w-184"
        ></img>
        {/* bottom buttons */}
        <button className="bg-background size-6 md:size-12 text-default hover:text-highlight rounded-full absolute block top-[45.5%] left-[83%]">
          <p className="text-2xl  font-semibold">A</p>
        </button>
        <button className="bg-background size-6 md:size-12 text-default hover:text-highlight rounded-full absolute block top-[55.3%] left-[74.6%]">
          <p className=" text-2xl font-semibold">B</p>
        </button>
        {/* top buttons */}
        <button className="bg-background text-default hover:text-highlight rounded-full absolute top-[36%] left-[74%]">
          <AiOutlineCheck className="size-6 md:size-12 font-semibold" />
        </button>
        <button className="bg-background text-default hover:text-highlight rounded-full absolute top-[46%] left-[65.5%]">
          <AiOutlineClose className="size-6 md:size-12 font-semibold" />
        </button>
        {/* up button */}
        <button className="bg-background text-default hover:text-highlight rounded-lg absolute top-[39.2%] left-[20.6%]">
          <AiFillCaretUp className="size-6 md:size-10  font-semibold" />
        </button>
        {/* down button */}
        <button className="bg-background text-default hover:text-highlight rounded-lg absolute top-[54.3%] left-[20.6%]">
          <AiFillCaretDown className="size-6 md:size-10  font-semibold" />
        </button>
        {/* left button */}
        <button className="bg-background text-default hover:text-highlight rounded-lg absolute top-[47%] left-[15.3%]">
          <AiFillCaretLeft className="size-6 md:size-10  font-semibold" />
        </button>
        {/* right button */}
        <button className="bg-background text-default hover:text-highlight rounded-lg absolute top-[47%] left-[26%]">
          <AiFillCaretRight className="size-6 md:size-10  font-semibold" />
        </button>

        {/* select button */}
        <button className="bg-background text-default hover:text-highlight rounded-full w-14 h-6 rotate-140 absolute top-[52%] left-[38.3%]">
          <p className="font-semibold rotate-180">select</p>
        </button>
        {/* start button */}
        <button className="bg-background text-default hover:text-highlight rounded-full w-14 h-6 rotate-140 absolute top-[52%] left-[48.6%]">
          <p className="font-semibold rotate-180">start</p>
        </button>
      </div>
    </section>
  );
}

export default Experience;
