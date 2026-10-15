import { DiGithubBadge } from "react-icons/di";
import { AiOutlineMail } from "react-icons/ai";

const gitHub = "https://github.com/smuffels";
const email = "";

function SocialLinks({
  className,
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: () => void;
}) {
  return (
    <div className={className}>
      <a href={gitHub} target="_blank" onClick={onLinkClick}>
        <DiGithubBadge className="size-6" />
      </a>
      <a href={`mailto:${email}`} onClick={onLinkClick}>
        <AiOutlineMail className="size-6" />
      </a>
    </div>
  );
}
export default SocialLinks;
