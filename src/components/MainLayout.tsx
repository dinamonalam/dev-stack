import TechList from "./TechList";
import Sidebar from "./Sidebar";
import type { Technology } from "../types";

interface MainLayoutProps {
  technologies: Technology[];
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const MainLayout = ({
  technologies,
  stack,
  handleAddToStack,
  handleRemoveFromStack,
  handleRemoveAll,
}: MainLayoutProps) => {
  return (
    <section
      id="technologies"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold">
        Explore the <span className="text-brand-gradient">Technologies</span>
      </h2>
      <p className="text-slate-500 mt-2 mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <TechList
            technologies={technologies}
            stack={stack}
            handleAddToStack={handleAddToStack}
          />
        </div>

        <div className="w-full lg:w-80">
          <Sidebar
            stack={stack}
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default MainLayout;