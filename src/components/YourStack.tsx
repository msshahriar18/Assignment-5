import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/technology";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";

interface IYourStackProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({ selectedTechnologies, setSelectedTechnologies }: IYourStackProps) => {
  const handleRemove = (technology: ITechnology) => {
    setSelectedTechnologies(
      selectedTechnologies.filter((t) => t.id !== technology.id)
    );
    toast.info(`${technology.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info("Stack cleared");
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5 w-full lg:w-72 h-fit">
      <h3 className="text-xl font-bold">Your Stack</h3>
      <p className="text-gray-500 text-sm mb-4">
        {selectedTechnologies.length} Technology Selected
      </p>

      {selectedTechnologies.length === 0 ? (
        <p className="text-center text-gray-400 border border-dashed rounded-xl py-6">
          Your stack is empty.
        </p>
      ) : (
        <div className="flex flex-col gap-3 mb-4">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex justify-between items-center border border-gray-200 rounded-xl p-3"
            >
              <div className="flex items-center gap-2">
                <img src={technology.icon} alt={technology.name} className="w-6 h-6" />
                <div>
                  <p className="font-semibold text-sm">{technology.name}</p>
                  <p className="text-xs text-gray-400">{technology.category}</p>
                </div>
              </div>
              <button onClick={() => handleRemove(technology)} className="text-gray-400">
                <TbTrash />
              </button>
            </div>
          ))}

          <button
            onClick={handleRemoveAll}
            className="border border-red-400 text-red-500 rounded-xl py-2 mt-2"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
