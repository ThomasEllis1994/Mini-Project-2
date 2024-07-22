import recipesData from "../db/recipesData";
import { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";

export function RecipeGrid() {
    const [isLoading, setIsLoading] = useState([true]);
    const [recipes, setRecipes] = useState([]);
    isLoading;
    useEffect(() => {
        setTimeout(() => {
            setRecipes(recipesData);
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="recipeContainer">
            {recipes.map((recipe) => (
                <>
                    <Link
                        key={recipe.recipeId}
                        to={`/recipes/${recipe.recipeId}`}
                    >
                        <div key={recipe.recipeId} className="recipeCard">
                            <div className="cover"></div>
                            <div className="recipeCardPic">
                                <img src={recipe.imageURL} alt={recipe.title} />
                            </div>

                            <div className="recipeCardTitle infoItem">
                                <h2 className="front">{recipe.title}</h2>
                            </div>
                            <div className="recipeTime infoItem">
                                <p className="front">
                                    <AccessTimeIcon
                                        style={{
                                            color: "white",
                                            fontSize: "1.2vw",
                                            marginRight: "3px",
                                        }}
                                    />
                                    {recipe.time}
                                </p>
                            </div>
                        </div>
                    </Link>
                </>
            ))}
        </div>
    );
}
