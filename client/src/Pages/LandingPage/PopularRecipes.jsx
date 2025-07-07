import RecipeCard from "../../Components/RecipeCard";

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
        <section className="px-[3%] flex flex-col items-center gap-4 font-secondary">
            <p className="text-3xl font-black text-center max-sm:w-[70%]">Popular Recipes Near You</p>
            <p className="text-xl font-normal text-[#555] text-center max-sm:w-[60%] max-sm:text-sm">Discover trending recipes from talented chefs in your area</p>
            <section className="grid gird-cols-1 gap-8 p-4 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {
                    popularRecipes.map(recipe=>
                        <RecipeCard 
                            id={recipe.id}
                            name={recipe.name}
                            description={recipe.description}
                            image={recipe.image}
                            level={recipe.level}
                            time={recipe.time}
                            nationality={recipe.nationality}
                            chefName={recipe.chef.name}
                            chefPfp={recipe.chef.image}
                            rating={recipe.rating}
                            reviews={recipe.reviews}
                        />
                    )
                }
            </section>
        </section>
    )

}

export default PopularRecipes;