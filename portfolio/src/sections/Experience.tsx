import type { Translation } from "../data/translations";

function Experience({ t }: { t: Translation }) {
  return (
    <section
      id="experience"
      className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="bg-elementbg rounded-lg border-2 border-default w-16 md: w-92 h-8 md:h-64 break-all"></div>
    </section>
  );
}

export default Experience;
