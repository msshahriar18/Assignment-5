import { useState } from "react";
import type { ITechnology } from "../types/technology";
import { FaStar } from "react-icons/fa";

interface ITechnologyCardProps {
  technology: ITechnology;
}

const TechnologyCard = ({ technology }: ITechnologyCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToStack = () => {
    setIsAdded(true);
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5">
      <div className="flex justify-between items-start mb-3">
        <img src={technology.icon} alt={technology.name} className="w-10 h-10" />
        <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-1">{technology.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{technology.description}</p>

      <div className="flex gap-2 items-center text-sm text-gray-500 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="flex items-center gap-1 ml-auto">
          <FaStar className="text-yellow-400" />
          {technology.rating}
        </span>
      </div>

      <button
        onClick={handleAddToStack}
        disabled={isAdded}
        className="bg-black text-white w-full py-2 rounded-xl"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
