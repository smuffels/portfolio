import Header from "./sections/Header.tsx";
import { useState } from "react";
import { translations, type Language } from "./data/translations";
import Aboutme from "./sections/Aboutme";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer.tsx";
import Experience from "./sections/Experience.tsx";

function App() {
  const [language, setLanguage] = useState<Language>("de");
  const t = translations[language];

  return (
    <div className="flex flex-col min-h-screen bg-background text-default font-default overflow-x-clip">
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main className="flex flex-1 flex-col">
        <Aboutme t={t} />
        <Experience t={t} />
        <Projects t={t} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
