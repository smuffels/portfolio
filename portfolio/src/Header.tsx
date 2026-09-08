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
    <header className="sticky top-0 bg-white z-50 px-6 py-2 border-b">
      <div className="grid grid-cols-3 items-center">
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
          <nav className="flex flex-col items-end">
            <a href="#home" onClick={() => setIsOpen(false)}>
              {" "}
              Home
            </a>
            <a href="#experience" onClick={() => setIsOpen(false)}>
              {" "}
              Experience
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              {" "}
              Projects
            </a>
          </nav>
          <div>
            <a href={gitHub} target="_blank" onClick={() => setIsOpen(false)}>
              <DiGithubBadge className="size-6" />
            </a>
            <a href={`mailto:${email}`} onClick={() => setIsOpen(false)}>
              <AiOutlineMail className="size-6" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
