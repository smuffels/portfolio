import Header from "./sections/Header.tsx";
import { useState } from "react";
import { translations, type Language } from "./data/translations";
import Aboutme from "./sections/Aboutme";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

function App() {
  const [language, setLanguage] = useState<Language>("de");
  const t = translations[language];

  return (
    <div className="flex flex-col min-h-screen bg-background text-default font-default">
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main className="flex-1 flex flex-col">
        <Aboutme t={t} />
        <Experience t={t} />
        <Projects t={t} />
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
