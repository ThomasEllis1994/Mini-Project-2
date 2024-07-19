import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export const HomePage = () => {
    return (
        <>
            <Navbar />
            {/* <div className="header navContainer">
                <div>
                    <img
                        src="../../src/photos/Site-Photos/Electric-Blue-Logo.png"
                        height="150px"
                        width="150px"
                        alt="Logo"
                        className="logo"
                    />
                </div>

                <div id="navigation" className="container links">
                    <NavLink className="nav" href="">
                        Home
                    </NavLink>
                    <NavLink className="nav" href="recipes.html">
                        Recipes
                    </NavLink>

                    <NavLink className="nav" href="dinnerHelper.html">
                        Dinner Helper
                    </NavLink>
                    <NavLink className="nav" href="">
                        Submit a Recipe
                    </NavLink>
                </div>

                <div>
                    <div className="headerRight">
                        <NavLink className="nav community" href="">
                            Sign In
                        </NavLink>
                    </div>
                    <div className="headerRight">
                        <NavLink className="nav community" href="">
                            Sign up for our newsletter
                        </NavLink>
                    </div>
                </div>
            </div> */}

            <article className="grid-container2">
                <article className="card text-center col-lg-3 col-md-6 col-sm-12">
                    <img
                        src="../Pictures/RecipePictures/steakFriedRice.jpg"
                        className="card-img-top"
                        alt="Steak Fried Rice"
                    />
                    <section className="card-body">
                        <h5 className="card-title">Steak Fried Rice</h5>
                        <NavLink
                            href="../HTML/Recipes/steakFriedRice.html"
                            className="card-text"
                        >
                            Recipe info
                        </NavLink>
                    </section>
                </article>
                <section style={{ textAlign: "center" }} id="theStory">
                    <header>
                        <h1 style={{ backgroundColor: "#57CC99" }}>
                            The Reason Behind the Roundtable
                        </h1>
                    </header>

                    <p className="story">
                        Back in college, I had a friend named Brad. Brad is an
                        increbile chef, so the group would ask Brad to make us
                        food at any chance we could get. He would let us help
                        out as his kitchen crew and it was always an amazing
                        time with incredible food. Before I met brad and for a
                        time after, I was a chicken tender and mac and cheese
                        guy. Thats pretty much all I cooked besides some basic
                        spiced chicken breasts with canned veggies. But those
                        lessons were the start of me exploring more foods.
                    </p>
                    <br />
                    <p className="story">
                        During the great lockdown of 2020, my friends and I were
                        spread across the country and stuck inside. Brad and I
                        started the great endevour to stay sane by just hanging
                        out on facetime while cooking. Soon our best friend
                        Shilohe heard of it and wanted to join. It was his idea
                        to begin actually cooking the same thing and to turn our
                        evening hangouts into cooking classNamees to teach one
                        another different recipes. Soon enough our whole
                        sohpomore year crew was in on it and we had 12 people
                        cycling through teaching recipes. Not everyone cooked,
                        but the classNamees were a way of bringing us together
                        from across the country.
                    </p>
                    <br />
                    <p className="story">
                        I wanted a place to share all the recipes I learned
                        during that time.This website is an homage to those
                        classNamees and to my friends.
                    </p>
                </section>
            </article>

            <section className="sliders" style={{ textAlign: "center" }}>
                <h2 style={{ backgroundColor: "#57CC99" }}>Recent Recipes</h2>
                <template id="recipe-template">
                    <article className="card text-center col-lg-3 col-md-6 col-sm-12">
                        <img
                            src="..."
                            className="card-img-top"
                            style={{
                                paddingTop: "10px",
                                borderRadius: "10px 10px 10px 10px",
                            }}
                            alt="..."
                        />
                        <section className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <NavLink href="..." className="card-text">
                                Recipe info
                            </NavLink>
                        </section>
                    </article>
                </template>
                <div id="recipe-list" className="row"></div>
            </section>

            <footer>
                <div className="footer">
                    <div>
                        <NavLink className="footerNav community" href="">
                            Sign In
                        </NavLink>

                        <NavLink className="footerNav community" href="">
                            Sign up for our newsletter
                        </NavLink>
                        <NavLink
                            className="footerNav community"
                            href="dinnerHelper.html"
                        >
                            Can&apost Decide What to Eat?
                        </NavLink>
                    </div>
                </div>
            </footer>
        </>
    );
};
