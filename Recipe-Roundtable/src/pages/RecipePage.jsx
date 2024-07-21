import { useParams } from "react-router-dom";
import recipesData from "../db/recipesData";
import { useState, useEffect } from "react";
function RecipePage() {
    const params = useParams();

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setRecipe(recipesData[params.recipeId - 1]);
        }, 1000);
    }, []);

    return (
        <>
            <div>
                <h1>{recipe.title}</h1>
                <img
                    className="recipeImage"
                    src={recipe.imageURL}
                    alt={recipe.title}
                />
            </div>
        </>
    );
}
export default RecipePage;
