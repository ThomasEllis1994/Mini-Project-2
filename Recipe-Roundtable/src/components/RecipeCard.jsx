export const RecipeCard = ({ recipe }) => {
    return (
        <>
            <div className="recipeCardPic">
                <img src={recipe.imageURL} alt={recipe.title} />
            </div>
            <div className="recipeCardTitle">
                <h2>{recipe.title}</h2>
            </div>
            <div className="recipeInfo">
                <div>{recipe.blurb}</div>
            </div>
            <div className="recipeTime">
                <p>{recipe.time}</p>
            </div>
        </>
    );
};
