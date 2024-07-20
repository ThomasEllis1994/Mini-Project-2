export default function RecipesPage() {
    return (
        <>
            <div className="header navContainer">
                <div>
                    <img
                        src="../Pictures/logo.png"
                        height="150px"
                        width="150px"
                        alt="Logo"
                        className="logo"
                    />
                </div>

                <div id="navigation" className="container links">
                    <a className="nav" href="index.html">
                        Home
                    </a>
                    <a className="nav" href="recipes.html">
                        Recipes
                    </a>

                    <a className="nav" href="dinnerHelper.html">
                        Dinner Helper
                    </a>
                    <a className="nav" href="">
                        Submit a Recipe
                    </a>
                </div>

                <div>
                    <div className="headerRight">
                        <a className="nav community" href="">
                            Sign In
                        </a>
                    </div>
                    <div className="headerRight">
                        <a className="nav community" href="">
                            Sign up for our newsletter
                        </a>
                    </div>
                </div>
            </div>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center">
                            <article className="recipeCard grid-container">
                                <figure className="grid-item recipePic">
                                    <img
                                        className="recipePic"
                                        src="../Pictures/RecipePictures/steakFriedRice.jpg"
                                        alt="Steak Fried Rice"
                                    />
                                    <figcaption>By Thomas Ellis</figcaption>
                                </figure>

                                <div className="grid-item titleDiv cardDiv">
                                    <h1 className="title">Steak Fried Rice</h1>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">Time:</h4>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">1 hour</h4>
                                </div>
                                <article className="ingredientsArt grid-item">
                                    <h3 className="Ingredients">Ingredients</h3>
                                    <ul className="ingAmounts">
                                        <li>1.5 Cup Leftover Rice</li>
                                        <li>1 Flank Steak</li>
                                        <li>1 cup Peppers</li>
                                        <li>1 cup Onions</li>
                                        <li>.5 cup Carrots</li>
                                        <li>.5 cup Baby Corns</li>
                                        <li>2 sprigs or 2 tsp dried</li>
                                    </ul>
                                </article>
                                <div className="bottom">
                                    <a
                                        className="link"
                                        href="../HTML/Recipes/steakFriedRice.html"
                                    >
                                        Recipe Info
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <article className="recipeCard grid-container">
                                <figure className="grid-item recipePic">
                                    <img
                                        className="recipePic"
                                        src="../Pictures/RecipePictures/breakfastBurrito.jpg"
                                        alt="Breakfast Burrito"
                                    />
                                    <figcaption>By Thomas Ellis</figcaption>
                                </figure>

                                <div className="grid-item titleDiv cardDiv">
                                    <h1 className="title">Breakfast Burrito</h1>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">Time:</h4>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">30 Minutes</h4>
                                </div>
                                <article className="ingredientsArt grid-item">
                                    <h3 className="Ingredients">Ingredients</h3>
                                    <ul className="ingAmounts">
                                        <li>4 Eggs</li>
                                        <li>4 Slices of Bacon</li>
                                        <li>2.5 oz Peppers</li>
                                        <li>3 oz Onions</li>
                                        <li>Shredded Cheese</li>
                                        <li>Heavy Cream</li>
                                        <li>Tortillas</li>
                                    </ul>
                                </article>
                                <div className="bottom">
                                    <a
                                        className="link"
                                        href="../HTML/Recipes/BreakfastBurrito.html"
                                    >
                                        Recipe Info
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <article className="recipeCard grid-container">
                                <figure className="grid-item recipePic">
                                    <img
                                        className="recipePic"
                                        src="../Pictures//RecipePictures/miniPizzaRolls.JPG"
                                        alt="Mini Pizza Rolls"
                                    />
                                    <figcaption>By Thomas Ellis</figcaption>
                                </figure>

                                <div className="grid-item titleDiv cardDiv">
                                    <h1 className="title">Mini Pizza Rolls</h1>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">Time:</h4>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">30 Minutes</h4>
                                </div>
                                <article className="ingredientsArt grid-item">
                                    <h3 className="Ingredients">Ingredients</h3>
                                    <ul className="ingAmounts">
                                        <li>Pillsbury Crescent Roll Sheet</li>
                                        <li>36 Pizza Pepperoni</li>
                                        <li>½ Cup Peppers</li>
                                        <li>½ Cup Onions</li>
                                        <li>Shredded Cheese</li>
                                        <li>Seasonings</li>
                                        <li>Pizza Sauce for Dipping</li>
                                    </ul>
                                </article>
                                <div className="bottom">
                                    <a
                                        className="link"
                                        href="../HTML/Recipes/MiniPizzaRolls.html"
                                    >
                                        Recipe Info
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <article className="recipeCard grid-container">
                                <figure className="grid-item recipePic">
                                    <img
                                        className="recipePic"
                                        src="../Pictures/RecipePictures/PepperoniStuffedChicken.jpg"
                                        alt="Stuffed Chicken"
                                    />
                                    <figcaption>By Thomas Ellis</figcaption>
                                </figure>

                                <div className="grid-item titleDiv cardDiv">
                                    <h1 className="title">
                                        Pepperoni Stuffed Chicken
                                    </h1>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">Time:</h4>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">1 Hour 20 Minutes</h4>
                                </div>
                                <article className="ingredientsArt grid-item">
                                    <h3 className="Ingredients">Ingredients</h3>
                                    <ul className="ingAmounts">
                                        <li>4 Chicken Breasts</li>
                                        <li>Pepperoni</li>
                                        <li>Onions</li>
                                        <li>Jalepenos</li>
                                        <li>Sliced Cheese</li>
                                        <li>Sun Dired Tomato Alfredo Sauce</li>
                                        <li>Pasta of Choice</li>
                                    </ul>
                                </article>
                                <div className="bottom">
                                    <a
                                        className="link"
                                        href="../HTML/Recipes/PepperoniStuffedChicken.html"
                                    >
                                        Recipe Info
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <article className="recipeCard grid-container">
                                <figure className="grid-item recipePic">
                                    <img
                                        className="recipePic"
                                        src="../Pictures//RecipePictures/DinoNuggies.png"
                                        alt="Dino Nuggies"
                                    />
                                    <figcaption>By Thomas Ellis</figcaption>
                                </figure>

                                <div className="grid-item titleDiv cardDiv">
                                    <h1 className="title">
                                        Dinosaur Chicken Nuggets
                                    </h1>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">Time:</h4>
                                </div>
                                <div className="grid-item timeDiv cardDiv">
                                    <h4 className="timeT">16 minutes</h4>
                                </div>
                                <article className="ingredientsArt grid-item">
                                    <h3 className="Ingredients">Ingredients</h3>
                                    <ul className="ingAmounts">
                                        <li>8 Nuggets of Questionable Meat</li>
                                    </ul>
                                </article>
                                <div className="bottom">
                                    <a
                                        className="link"
                                        href="../HTML/Recipes/DinoNuggies.html"
                                    >
                                        Recipe Info
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev backG"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next backG"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden next">Next</span>
                </button>
            </div>
            <footer>
                <div className="footer">
                    <div>
                        <a className="footerNav community" href="">
                            Sign In
                        </a>

                        <a className="footerNav community" href="">
                            Sign up for our newsletter
                        </a>
                        <a
                            className="footerNav community"
                            href="dinnerHelper.html"
                        >
                            Can`&apost Decide What to Eat?
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
