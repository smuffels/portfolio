import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-wrap items-center gap-1 font-title">
      <p>konami:</p>
      <AiFillCaretUp />
      <AiFillCaretUp />
      <AiFillCaretDown />
      <AiFillCaretDown />
      <AiFillCaretLeft />
      <AiFillCaretRight />
      <AiFillCaretLeft />
      <AiFillCaretRight />
      <p>B</p>
      <p>A</p>
      <p>start</p>
    </div>
  );
}

export default Footer;
