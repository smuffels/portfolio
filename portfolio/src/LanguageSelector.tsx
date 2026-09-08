import { type Language } from "./translations";

function LanguageSelector({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div>
      <button onClick={() => setLanguage("de")}>de</button>
      <span>|</span>
      <button onClick={() => setLanguage("en")}> en</button>
    </div>
  );
}

export default LanguageSelector;
