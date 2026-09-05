import { DiGithubBadge } from "react-icons/di";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const gitHub = "https://github.com/smuffels";
  const email = "";

  return (
    <header className="sticky top-0 bg-white z-50 grid grid-cols-3 items-center px-6 py-2 border-b">
      <div className="justify-self-start">
        <span>Céline</span>
      </div>
      {/* desktop */}
      <nav className="hidden md:flex justify-self-center gap-6">
        <a href="#home"> Home</a>
        <a href="#experience"> Experience</a>
        <a href="#projects"> Projects</a>
      </nav>
      <div className="justify-self-end gap-4">
        <div className="hidden md:flex">
          <a href={gitHub} target="_blank">
            <DiGithubBadge className="size-6" />
          </a>
          <a href={`mailto:${email}`}>
            <AiOutlineMail className="size-6" />
          </a>
        </div>

        {/* mobile */}
        <button className="md:hidden p-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
  );
}
export default Header;
