import { FiX } from "react-icons/fi";
import type { Technology } from "../types";

interface SidebarProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Sidebar = ({ stack, handleRemoveFromStack, handleRemoveAll }: SidebarProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 lg:sticky lg:top-24 h-fit">
      <h3 className="font-bold text-slate-900">Your Stack</h3>
      <p className="text-sm text-slate-500 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-slate-400 py-6 text-center">
          Your stack is empty.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromStack(item.id)}
                aria-label={`Remove ${item.name}`}
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full mt-5 border border-red-200 text-red-500 text-sm font-semibold py-2 rounded-lg hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default Sidebar;