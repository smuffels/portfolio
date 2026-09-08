import { type Translation } from "./translations";

function NavLinks({
  className,
  onLinkClick,
  t,
}: {
  className: string;
  onLinkClick?: () => void;
  t: Translation;
}) {
  return (
    <nav className={className}>
      <a href="#home" onClick={onLinkClick}>
        {t.home}
      </a>
      <a href="#experience" onClick={onLinkClick}>
        {t.experience}
      </a>
      <a href="#projects" onClick={onLinkClick}>
        {t.projects}
      </a>
    </nav>
  );
}

export default NavLinks;
