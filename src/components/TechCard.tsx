import { FiStar } from "react-icons/fi";
import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechCard = ({ tech, stack, handleAddToStack }: TechCardProps) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-pink-50 text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="text-sm text-slate-500 mt-2 leading-relaxed">
        {tech.description}
      </p>

      <div className="flex items-center gap-3 mt-4 text-xs">
        <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">
          {tech.category}
        </span>
        <span className="text-slate-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-amber-500 font-medium ml-auto">
          <FiStar className="fill-amber-500" />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={`w-full mt-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;