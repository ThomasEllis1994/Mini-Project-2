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
        }, 0);
    }, []);

    return (
        <>
            <div className="recipePageLayout">
                <div className="recipeTop">
                    <div className="imageContainer leftRecipe">
                        <img
                            className="recipePageImage"
                            src={recipe.imageURL}
                            alt={recipe.title}
                        />
                    </div>
                    <div className="rightRecipe">
                        <div className="recipePageTitle">
                            <h1>{recipe.title}</h1>
                        </div>
                        <div className="ingredients list">
                            <h4>Ingredients</h4>
                            {recipe.ingredients?.map((ingredient) => (
                                <>
                                    <p className="ingr item">{ingredient}</p>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="instructions">
                    <h4>Instructions</h4>
                    <ol className=" list">
                        {recipe.instructions?.map((instruction) => (
                            <>
                                <li className="instr item">{instruction}</li>
                            </>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default RecipePage;
