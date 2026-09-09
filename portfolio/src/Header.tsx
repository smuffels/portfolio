import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import { type Translation, type Language } from "./translations";
import LanguageSelector from "./LanguageSelector";

function Header({
  t,
  language,
  setLanguage,
}: {
  t: Translation;
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-6 py-2 border-b bg-background/50 font-title">
      <div className="grid grid-cols-3 items-center">
        {/* col 1 */}
        <div className="justify-self-start">
          <span>Céline</span>
        </div>
        {/* col 2 */}
        <div className="justify-self-center">
          <NavLinks className="hidden md:flex gap-6" t={t} />
        </div>
        {/* col 3 */}
        <div className="justify-self-end gap-4">
          <LanguageSelector
            className="hidden md:flex"
            language={language}
            setLanguage={setLanguage}
          />
          <SocialLinks className="hidden md:flex" />

          {/* mobile menu */}
          <button
            className="md:hidden p-0 justify-self-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-end">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <NavLinks
            className="flex flex-col items-end"
            onLinkClick={() => setIsOpen(false)}
            t={t}
          />
          <SocialLinks onLinkClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
}
export default Header;
