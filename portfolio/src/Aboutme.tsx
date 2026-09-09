import { FaReact } from "react-icons/fa";
import { useState } from "react";
import type { Translation } from "./translations";

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
        <FaReact
          onClick={() => setSelectedAboutme(buttons.aboutme)}
          className={`w-16 h-16 md:w-24 md:h-24 ${
            selectedAboutme === buttons.aboutme
              ? "border-2 border-highlight rounded-lg"
              : ""
          }`}
        ></FaReact>
        <FaReact
          onClick={() => setSelectedAboutme(buttons.it)}
          className={`w-16 h-16 md:w-24 md:h-24 ${
            selectedAboutme === buttons.it
              ? "border-2 border-highlight rounded-lg"
              : ""
          }`}
        ></FaReact>
        <FaReact
          onClick={() => setSelectedAboutme(buttons.hobbys)}
          className={`w-16 h-16 md:w-24 md:h-24 ${
            selectedAboutme === buttons.hobbys
              ? "border-2 border-highlight rounded-lg"
              : ""
          }`}
        ></FaReact>
      </div>

      <div className="bg-elementbg rounded-lg border-2 border-default w-16 md: w-92 break-all">
        {selectedAboutme == buttons.aboutme && <p>{t.aboutme}</p>}
        {selectedAboutme == buttons.it && <p>{t.aboutmeIt}</p>}
        {selectedAboutme == buttons.hobbys && <p>{t.aboutmeHobbys}</p>}
      </div>
    </section>
  );
}

export default Aboutme;
