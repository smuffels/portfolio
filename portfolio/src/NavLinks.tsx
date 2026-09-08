function NavLinks({
  className,
  onLinkClick,
}: {
  className: string;
  onLinkClick?: () => void;
}) {
  return (
    <nav className={className}>
      <a href="#home" onClick={onLinkClick}>
        {" "}
        Home
      </a>
      <a href="#experience" onClick={onLinkClick}>
        {" "}
        Experience
      </a>
      <a href="#projects" onClick={onLinkClick}>
        {" "}
        Projects
      </a>
    </nav>
  );
}

export default NavLinks;
