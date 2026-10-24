import type { Translation } from "../data/translations";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { useConsole, type ExperienceItem } from "../ConsoleLogic";
import TypewriterEffect from "../components/TypewriterEffect";
import { useState } from "react";
import { useCheatcode } from "../Cheatcode";
import consoleSvg from "../assets/images/nintendo_console.svg";

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
  const [konamiActive, setKonamiActive] = useState(false);
  const { registerInput } = useCheatcode(() => setKonamiActive(true));
  return (
    <section id="experience" className="px-4 py-16">
      <div className="flex gap-2 flex-col items-center">
        {/* text */}
        <div className="bg-elementbg rounded-lg border-2 border-default w-full md:w-184 break-normal">
          {konamiActive ? (
            <TypewriterEffect
              text="pls hire me :)"
              className="m-2"
            ></TypewriterEffect>
          ) : selectedLeaf ? (
            <TypewriterEffect
              text={selectedLeaf.text!}
              className="m-2"
            ></TypewriterEffect>
          ) : (
            currentOptions.map((option, i) => (
              <li key={i} className="flex gap-2 m-2">
                <span className="w-2"> {i === cursor ? ">" : ""}</span>
                <TypewriterEffect text={option.label}></TypewriterEffect>
              </li>
            ))
          )}
        </div>

        {/* controller */}
        <div className="relative w-full md:w-168">
          <img src={consoleSvg} className="w-full"></img>
          {/* bottom buttons */}
          <button
            className="bg-background size-6 md:size-12 text-default hover:text-highlight rounded-full absolute block top-[40%] left-[84.9%]"
            onClick={() => registerInput("a")}
          >
            <p className="md:text-2xl  font-semibold">A</p>
          </button>
          <button
            className="bg-background size-6 md:size-12 text-default hover:text-highlight rounded-full absolute block top-[57%] left-[76.2%]"
            onClick={() => registerInput("b")}
          >
            <p className=" md:text-2xl font-semibold">B</p>
          </button>
          {/* top buttons */}
          <button
            className="bg-background text-default hover:text-highlight rounded-full absolute top-[23%] left-[75.5%]"
            onClick={select}
          >
            <AiOutlineCheck className="size-6 md:size-12 font-semibold" />
          </button>
          <button
            className="bg-background text-default hover:text-highlight rounded-full absolute top-[40.5%] left-[66.4%]"
            onClick={() => {
              goBack();
              setKonamiActive(false);
            }}
          >
            <AiOutlineClose className="size-6 md:size-12 font-semibold" />
          </button>
          {/* up button */}
          <button
            className="bg-background text-default hover:text-highlight rounded-lg absolute top-[29.2%] left-[19.4%]"
            onClick={() => {
              goUp();
              registerInput("up");
            }}
          >
            <AiFillCaretUp className="size-5 md:size-10  font-semibold" />
          </button>
          {/* down button */}
          <button
            className="bg-background text-default hover:text-highlight rounded-lg absolute top-[55.2%] left-[19.4%]"
            onClick={() => {
              goDown();
              registerInput("down");
            }}
          >
            <AiFillCaretDown className="size-5 md:size-10  font-semibold" />
          </button>
          {/* left button */}
          <button
            className="bg-background text-default hover:text-highlight rounded-lg absolute top-[42.4%] left-[13.9%]"
            onClick={() => {
              goBack();
              registerInput("left");
              setKonamiActive(false);
            }}
          >
            <AiFillCaretLeft className="size-5 md:size-10  font-semibold" />
          </button>
          {/* right button */}
          <button
            className="bg-background text-default hover:text-highlight rounded-lg absolute top-[42.4%] left-[25%]"
            onClick={() => {
              select();
              registerInput("right");
            }}
          >
            <AiFillCaretRight className="size-5 md:size-10  font-semibold" />
          </button>

          {/* select button */}
          <button className="bg-background text-default hover:text-highlight rounded-full w-7 h-3 md:w-14 md:h-6 rotate-140 absolute top-[52%] left-[38%]">
            <p className="hidden justify-center md:flex font-semibold rotate-180">
              select
            </p>
            <p className="md:hidden font-semibold text-xs rotate-180">slct</p>
          </button>
          {/* start button */}
          <button
            className="bg-background text-default hover:text-highlight rounded-full w-7 h-3 md:w-14 md:h-6 rotate-140 absolute top-[52%] left-[48.6%]"
            onClick={() => registerInput("start")}
          >
            <p className="hidden justify-center md:flex font-semibold rotate-180">
              start
            </p>
            <p className="md:hidden font-semibold text-xs rotate-180">strt</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
