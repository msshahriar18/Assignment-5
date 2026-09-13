import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-2xl"
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>

                <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-bold w-8 h-8 rounded-lg flex items-center justify-center">
                        DS
                    </span>
                    <h1 className="font-bold text-xl">
                        Dev <span className="text-pink-500">Stack</span>
                    </h1>
                </div>

                <ul className="hidden md:flex gap-6 items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>


                </ul>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block">Sign In</button>
                    <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-5 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <ul className="md:hidden flex flex-col gap-3 px-4 pb-4">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;