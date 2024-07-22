import { RecipeGrid } from "../components/RecipeGrid";

export const HomePage = () => {
    return (
        <>
            <article className="gridContainer">
                <div className="heroInfo">
                    <h1>The Recipe Roundtable</h1>
                    <p>This will be a blurb later on</p>
                </div>
                <div className="heroRecipes RoW">{/* <RecipeCard /> */}</div>
            </article>

            <section className="sliders" style={{ textAlign: "center" }}>
                <h2 className="primaryColor">Recent Recipes</h2>

                <div id="recipe-list" className="row">
                    <RecipeGrid />
                </div>
            </section>
        </>
    );
};
