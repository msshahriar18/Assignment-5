import { use } from "react";
import type { ITechnology } from "../types/technology";

interface ITechnologiesProps {
    technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
    const technologies = use(technologiesPromise);

    console.log(technologies);

    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold">
                Explore the <span className="text-pink-500">Technologies</span>
            </h2>
            <p className="text-gray-600 mb-6">
                Pick one technology per category to build your ideal stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* TechnologyCard map porer step e ashbe */}
            </div>
        </section>
    );
};

export default Technologies;