import { useState } from "react";
import type { Translation } from "../data/translations";
import { AiOutlineInstagram } from "react-icons/ai";

function Aboutme({ t }: { t: Translation }) {
  const buttons = {
    aboutme: "aboutme",
    it: "it",
    hobbys: "hobbys",
  };

  const [selectedAboutme, setSelectedAboutme] = useState(buttons.aboutme);

  return (
    <section id="home" className="py-16 px-4">
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
      <div className="bg-elementbg mx-auto rounded-lg border-2 border-default w-full md:w-184 break-all">
        {selectedAboutme == buttons.aboutme && <p>{t.aboutme.aboutmee}</p>}
        {selectedAboutme == buttons.it && (
          <div className="ml-2 mr-2">
            <p>{t.aboutme.itIntro}</p>
            <p>{t.aboutme.itTitle}</p>
            <ul className="list-disc list-inside text-left mt-2 mb-2">
              {t.aboutme.itSkills.map((hobby: string, i: number) => (
                <li key={i}>
                  <span>{hobby}</span>
                </li>
              ))}
            </ul>
            <p>{t.aboutme.itOutro}</p>
          </div>
        )}
        {selectedAboutme == buttons.hobbys && (
          <div className="ml-2 mr-2">
            <p>{t.aboutme.hobbysIntro}</p>
            <ul className="list-disc list-inside text-left mt-2 mb-2">
              {t.aboutme.hobbys.map((hobby: string, i: number) => (
                <li key={i}>
                  <span>{hobby}</span>
                </li>
              ))}
            </ul>
            <p>{t.aboutme.hobbysOutro}</p>
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
