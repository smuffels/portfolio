import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50 px-6 py-2 border-b">
      <div className="grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <span>Céline</span>
        </div>
        {/* desktop */}
        <NavLinks className="hidden md:flex justify-self-center gap-6" />
        <div className="justify-self-end gap-4">
          <SocialLinks className="hidden md:flex" />
        </div>
        {/* mobile */}
        <button
          className="md:hidden p-0 justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-end">
          <NavLinks
            className="flex flex-col items-end"
            onLinkClick={() => setIsOpen(false)}
          />
          <SocialLinks onLinkClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
}
export default Header;
