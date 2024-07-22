import { useParams } from "react-router-dom";
import recipesData from "../db/recipesData";
import { useState, useEffect } from "react";
function RecipePage() {
    const params = useParams();

    const [recipe, setRecipe] = useState([]);
    console.log(params);

    useEffect(() => {
        setTimeout(() => {
            setRecipe(recipesData[params.recipeId - 1]);
        }, 1000);
    }, []);

    return (
        <>
            <div className="recipePageLayout">
                <div>
                    <img
                        className="recipePageImage"
                        src={recipe.imageURL}
                        alt={recipe.title}
                    />
                </div>

                <h1>{recipe.title}</h1>
                <div>
                    {recipe.ingredients?.map((ingredient) => (
                        <>
                            <p>{ingredient}</p>
                        </>
                    ))}
                </div>
                {recipe.instructions?.map((instruction) => (
                    <>
                        <p>{instruction}</p>
                    </>
                ))}
            </div>
        </>
    );
}
export default RecipePage;
