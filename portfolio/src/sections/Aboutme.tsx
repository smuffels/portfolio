import { FaReact } from "react-icons/fa";
import { useState } from "react";
import type { Translation } from "../data/translations";
import TypewriterEffect from "../components/TypewriterEffect";
import { AiOutlineInstagram } from "react-icons/ai";

function Aboutme({ t }: { t: Translation }) {
  const buttons = {
    aboutme: "aboutme",
    it: "it",
    hobbys: "hobbys",
  };

  const [selectedAboutme, setSelectedAboutme] = useState(buttons.aboutme);

  return (
    <section
      id="home"
      className="grid items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="flex justify-center gap-6 md:gap-10 py-2">
        <img
          onClick={() => setSelectedAboutme(buttons.aboutme)}
          className={`w-24 h-24 md:w-48 md:h-48 ${
            selectedAboutme === buttons.aboutme
              ? "border-2 border-highlight rounded-lg"
              : ""
          }`}
          src="src/assets/images/me.png"
        ></img>
        <img
          onClick={() => setSelectedAboutme(buttons.it)}
          className={`w-24 h-24 md:w-48 md:h-48 ${
            selectedAboutme === buttons.it
              ? "border-2 border-highlight rounded-lg"
              : ""
          }`}
          src="src/assets/images/me_it.png"
        ></img>
        <img
          onClick={() => setSelectedAboutme(buttons.hobbys)}
          className={`w-24 h-24 md:w-48 md:h-48 ${
            selectedAboutme === buttons.hobbys
              ? "border-2 border-highlight rounded-lg"
              : ""
          }`}
          src="src/assets/images/me_hobby.png"
        ></img>
      </div>

      <div className="bg-elementbg rounded-lg border-2 border-default w-16 w-92 md:w-184 break-all">
        {selectedAboutme == buttons.aboutme && (
          <TypewriterEffect text={t.aboutme.aboutmee} />
        )}
        {selectedAboutme == buttons.it && (
          <TypewriterEffect text={t.aboutme.aboutmeIt} />
        )}
        {selectedAboutme == buttons.hobbys && (
          <div className="ml-2 mr-2">
            <TypewriterEffect text={t.aboutme.hobbysIntro} />

            <ul className="list-disc list-inside text-left mt-2 mb-2">
              {t.aboutme.hobbys.map((hobby: string, i: number) => (
                <li key={i}>
                  <TypewriterEffect text={hobby} />
                </li>
              ))}
            </ul>

            <TypewriterEffect text={t.aboutme.hobbysOutro} />
            <a href="https://www.instagram.com/fresh_trance/" target="_blank">
              <AiOutlineInstagram className="size-6 mt-2" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Aboutme;
