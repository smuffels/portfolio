import { type Language } from "./translations";

function LanguageSelector({
  className,
  language,
  setLanguage,
}: {
  className?: string;
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div className={className}>
      <button
        onClick={() => setLanguage("de")}
        className={language === "de" ? "text-highlight" : ""}
      >
        de
      </button>
      <span>|</span>
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "text-highlight" : ""}
      >
        {" "}
        en
      </button>
    </div>
  );
}

export default LanguageSelector;
