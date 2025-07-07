import { GrLocation } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const Search = () => {
    return (
        <section className="py-[3%] px-[10%] flex flex-col items-center font-secondary gap-4">
            <h1 className="text-5xl font-black max-md:text-[2.5rem] max-sm:w-[70%] text-center max-sm:text-[2rem]">Discover Amazing <span className="text-primary font-cookie text-5xl">Recipes</span></h1>
            <p className="w-[50%] text-center text-[clamp(0.8rem,1rem,1.25rem)] text-[#647488] max-md:w-[90%] max-sm:w-[70%]">Explore thousands of delicious recipes from around the world, 
            share your culinary creations, and connect with fellow food enthusiasts in your area.</p>
            <section className="w-[55%] m-[1rem auto] max-md:w-[70%]">
                <section className="flex items-center relative text-xl">
                    <input type="text" placeholder="Search for recipes, ingredients, or cuisines..." className="w-full p-4 border-2 border-solid border-[#e5e7eb] rounded-[0.5rem] text-xl font-secondary max-sm:placeholder:opacity-0  max-sm:text-sm"/>
                    <button className="absolute right-6 cursor-pointer">
                        <FiSearch className="max-sm:w-4 max-sm:h-4" color="rgb(156 163 175)" size={24}/>
                    </button>
                </section>
            </section>
            <section className="p-2.5 flex gap-6 max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:text-xs maz-sm:text-[0.8rem] max-sm:p-0">
                <p className="flex justify-center items-center gap-2">
                    <GrLocation className="location-icon" color="orange" fontWeight={600}/>
                    <span className="text-[#48525f] font-medium max-sm:text-sm"><strong>India</strong></span>
                </p>
                <p className="flex justify-center items-center gap-2">
                    <FaArrowTrendUp className="trend-icon" color="green"/>
                    <span className="text-[#647488] max-sm:text-sm">50+ Popular recipes near you</span>
                </p>
            </section>
        </section>
    )
}

export default Search;