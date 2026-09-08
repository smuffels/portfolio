import Header from "./Header";
import { useState } from "react";
import { translations, type Language } from "./translations";

function App() {
  const [language, setLanguage] = useState<Language>("de");
  const t = translations[language];

  return (
    <div className="flex flex-col min-h-screen">
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main className="flex-1 flex flex-col">
        <section
          id="home"
          className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          Bereich 1 hier
        </section>
        <section
          id="experience"
          className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          Bereich 2 hier
        </section>
        <section
          id="projects"
          className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          Bereich 3 hier
        </section>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
