import type { Translation } from "../data/translations";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { useConsole, type ExperienceItem } from "../ConsoleLogic";
import TypewriterEffect from "../components/TypewriterEffect";

function Experience({ t }: { t: Translation }) {
  const experience: ExperienceItem[] = [
    {
      id: "work",
      label: t.workExperience,
      items: [
        { id: "cybersystems", label: "Cybersystems", text: t.cybersystems },
        { id: "flumerics", label: "Flumerics", text: t.flumerics },
      ],
    },
    {
      id: "club",
      label: t.clubExperience,
      items: [
        { id: "alias", label: "Alias", text: t.alias },
        { id: "zur", label: "Zurich Uas Racing", text: t.zur },
        { id: "frackwoche", label: "Frackwoche 2025", text: t.frackwoche },
      ],
    },
  ];
  const { currentOptions, cursor, selectedLeaf, goUp, goDown, select, goBack } =
    useConsole(experience);
  return (
    <section
      id="experience"
      className="flex-1 flex flex-col items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* text */}
      <div className="bg-elementbg rounded-lg border-2 border-default w-92 md:w-184 h-8 md:h-64 break-all">
        {selectedLeaf ? (
          <TypewriterEffect
            text={selectedLeaf.text!}
            className="m-2"
          ></TypewriterEffect>
        ) : (
          currentOptions.map((option, i) => (
            <li key={i} className="flex gap-2 mt-2">
              <span className="ml-2 w-2"> {i === cursor ? ">" : ""}</span>
              <span>{option.label}</span>
            </li>
          ))
        )}
      </div>

      {/* controller */}
      <div className="relative inline-block">
        <img
          src="src/assets/images/nintendo_console.svg"
          className="w-92 md:w-184"
        ></img>
        {/* bottom buttons */}
        <button className="bg-background size-6 md:size-12 text-default hover:text-highlight rounded-full absolute block top-[45.5%] left-[83%]">
          <p className="md:text-2xl  font-semibold">A</p>
        </button>
        <button className="bg-background size-6 md:size-12 text-default hover:text-highlight rounded-full absolute block top-[55.3%] left-[74.6%]">
          <p className=" md:text-2xl font-semibold">B</p>
        </button>
        {/* top buttons */}
        <button
          className="bg-background text-default hover:text-highlight rounded-full absolute top-[36%] left-[74%]"
          onClick={select}
        >
          <AiOutlineCheck className="size-6 md:size-12 font-semibold" />
        </button>
        <button
          className="bg-background text-default hover:text-highlight rounded-full absolute top-[46%] left-[65.5%]"
          onClick={goBack}
        >
          <AiOutlineClose className="size-6 md:size-12 font-semibold" />
        </button>
        {/* up button */}
        <button
          className="bg-background text-default hover:text-highlight rounded-lg absolute top-[39.2%] left-[20.6%]"
          onClick={goUp}
        >
          <AiFillCaretUp className="size-6 md:size-10  font-semibold" />
        </button>
        {/* down button */}
        <button
          className="bg-background text-default hover:text-highlight rounded-lg absolute top-[54.3%] left-[20.6%]"
          onClick={goDown}
        >
          <AiFillCaretDown className="size-6 md:size-10  font-semibold" />
        </button>
        {/* left button */}
        <button
          className="bg-background text-default hover:text-highlight rounded-lg absolute top-[47%] left-[15.3%]"
          onClick={goBack}
        >
          <AiFillCaretLeft className="size-6 md:size-10  font-semibold" />
        </button>
        {/* right button */}
        <button
          className="bg-background text-default hover:text-highlight rounded-lg absolute top-[47%] left-[26%]"
          onClick={select}
        >
          <AiFillCaretRight className="size-6 md:size-10  font-semibold" />
        </button>

        {/* select button */}
        <button className="bg-background text-default hover:text-highlight rounded-full w-7 h-3 md:w-14 md:h-6 rotate-140 absolute top-[52%] left-[38.3%]">
          <p className="hidden justify-center md:flex font-semibold rotate-180">
            select
          </p>
          <p className="md:hidden font-semibold text-xs rotate-180">slct</p>
        </button>
        {/* start button */}
        <button className="bg-background text-default hover:text-highlight rounded-full w-7 h-3 md:w-14 md:h-6 rotate-140 absolute top-[52%] left-[48.6%]">
          <p className="hidden justify-center md:flex font-semibold rotate-180">
            start
          </p>
          <p className="md:hidden font-semibold text-xs rotate-180">strt</p>
        </button>
      </div>
    </section>
  );
}

export default Experience;
