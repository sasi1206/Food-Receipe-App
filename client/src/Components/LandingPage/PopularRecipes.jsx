import { IoMdHeartEmpty } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { GoBook } from 'react-icons/go';

import '../../Styles/LandingPage/PopularRecipes.css';

const PopularRecipes = () => {

    const popularRecipes = [{
        id: 1,
        name: "Mediterranean Quinoa Salad",
        description: "Fresh and healthy salad with quinoa, olives, feta cheese, and herbs",
        image: "/Mediterranean Quinoa Salad.jpg",
        level: "Easy",
        time: "20 min",
        nationality: "Mediterranean",
        chef:{
            name: "Chef Maria",
            image: "https://xsgames.co/randomusers/avatar.php?g=female"
        },
        rating: 4.8,
        reviews: 120
    },{
        id: 2,
        name: "Spicy Thai Noodles",
        description: "Delicious stir-fried noodles with a spicy peanut sauce and fresh vegetables",
        image: "/Spicy Thai Noodles.jpg",
        level: "Medium",
        time: "30 min",
        nationality: "Thai",
        chef:{
            name: "Chef Somchai",
            image: "https://xsgames.co/randomusers/avatar.php?g=male"
        },
        rating: 4.5,
        reviews: 95
    },{
        id: 3,
        name: "Classic Italian Pizza",
        description: "Authentic pizza with a crispy crust, fresh tomatoes, mozzarella, and basil",
        image: "/Classic Italian Pizza.jpg",
        level: "Easy",
        time: "25 min",
        nationality: "Italian",
        chef:{
            name: "Chef Luca",
            image: "https://xsgames.co/randomusers/avatar.php?g=female"
        },
        rating: 4.7,
        reviews: 150
    },{
        id: 4,
        name: "Indian Butter Chicken",
        description: "Creamy and flavorful butter chicken served with basmati rice",
        image: "/Indian Butter Chicken.jpg",
        level: "Medium",
        time: "40 min",
        nationality: "Indian",
        chef:{
            name: "Chef Priya",
            image: "https://xsgames.co/randomusers/avatar.php?g=female"
        },
        rating: 4.9,
        reviews: 200   
    },{
        id: 5,
        name: "Japanese Sushi Rolls",
        description: "Fresh sushi rolls with a variety of fillings and dipping sauces",
        image: "/Japanese Sushi Rolls.jpg",
        level: "Hard",
        time: "60 min",
        nationality: "Japanese",
        chef:{
            name: "Chef Kenji",
            image: "https://xsgames.co/randomusers/avatar.php?g=male"
        },
        rating: 4.6,
        reviews: 80

    },{
        id: 6,
        name: "Mexican Tacos",
        description: "Spicy and flavorful tacos with fresh salsa and guacamole",
        image: "/Mexican Tacos.jpg",
        level: "Easy",
        time: "15 min",
        nationality: "Mexican",
        chef:{
            name: "Chef Carlos",
            image: "https://xsgames.co/randomusers/avatar.php?g=male"
        },
        rating: 4.4,
        reviews: 110
    }];

    return (
        <section className="popular-recipes">
            <h1 className="popular-recipes-title">Popular Recipes Near You</h1>
            <p className="popular-recipes-description">Discover trending recipes from talented chefs in your area</p>
            <section className="popular-recipes-lists">
                {
                    popularRecipes.map(recipe=>
                        <section className="recipe"  key={recipe.id}>
                            <section className="image-container">
                                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                                <section className="level">
                                    <p className={`${recipe.level} recipe-level`}>{recipe.level}</p>
                                    <button className="wishlist">
                                        <IoMdHeartEmpty size={17}/>
                                    </button>
                                </section>
                            </section>
                            <section className="recipe-details">
                                <section className='recipe-header'>
                                    <p className="nationality">{recipe.nationality}</p>
                                    <p className="time">
                                        <FiClock />
                                        <span>{recipe.time}</span>
                                    </p>
                                </section>
                                <h3 className="recipe-name">{recipe.name}</h3>
                                <p className="recipe-description">{recipe.description}</p>
                                <section className="footer">
                                    <section className="rating">
                                        <CiStar size={20} color="rgb(250 204 21)" fill="black"/>
                                        <p className="rating-value">{recipe.rating}</p>
                                        <p className="reviews-count">({recipe.reviews})</p>
                                    </section>
                                    <section className="chef">
                                        <img src={recipe.chef.image} alt={recipe.chef.name} className="chef-image" />
                                        <p className="chef-name">{recipe.chef.name}</p>
                                    </section>
                                </section>
                                <button className="view-recipe">
                                    <GoBook size={20}/>
                                    <span>View Recipe</span>
                                </button>
                            </section>
                        </section>
                    )
                }
            </section>
        </section>
    )

}

export default PopularRecipes;