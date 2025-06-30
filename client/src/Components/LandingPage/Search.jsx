import { GrLocation } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import '../../Styles/LandingPage/Search.css';

const Search = () => {
    return (
        <section className="search-page">
            <h1>Discover Amazing <span>Recipes</span></h1>
            <p>Explore thousands of delicious recipes from around the world, 
            share your culinary creations, and connect with fellow food enthusiasts in your area.</p>
            <section className="search">
                <section className="search-bar">
                    <input type="text" placeholder="Search for recipes, ingredients, or cuisines..." />
                    <button>
                        <FiSearch className="search-icon" color="rgb(156 163 175)" size={24}/>
                    </button>
                </section>
            </section>
            <section className="additional-details">
                <p className="location">
                    <GrLocation className="location-icon" color="orange" fontWeight={600}/>
                    <span><strong>India</strong></span>
                </p>
                <p className="recipes-near-user">
                    <FaArrowTrendUp className="trend-icon" color="green"/>
                    <span>50+ Popular recipes near you</span>
                </p>
            </section>
        </section>
    )
}

export default Search;