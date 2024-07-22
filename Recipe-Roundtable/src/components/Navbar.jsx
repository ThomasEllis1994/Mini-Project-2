import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar navContainer">
            <div className="leftNav navItem">
                <NavLink to="/">
                    <img
                        src="../../src/photos/Site-Photos/Electric-Blue-Logo.png"
                        alt="Recipe Roundtable Logo"
                        style={{
                            height: 100,
                            width: 100,
                        }}
                    />
                </NavLink>
            </div>
            <div className="navContainer">
                <div className="navLinks navItem">
                    <div></div>
                    <div className="siteLinks">
                        <NavLink className="navLink" to="/">
                            Home
                        </NavLink>
                        <NavLink className="navLink" to="/recipes">
                            Recipes
                        </NavLink>
                        <NavLink className="navLink" href="#!">
                            Dinner Helper
                        </NavLink>
                        <NavLink className="navLink" href="#!">
                            Submit a Recipe
                        </NavLink>
                        <NavLink className={"navLink"} to="/about">
                            About
                        </NavLink>
                    </div>
                    <div></div>

                    <div className="login navItem">
                        <NavLink className="navLink" href="#!">
                            Login
                        </NavLink>
                        <NavLink className="navLink" href="#!">
                            Sign up for Newsletter
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
