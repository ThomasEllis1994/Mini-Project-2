import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="leftNav">
                <NavLink href="#!">
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
            <div className="navLinks">
                <div></div>
                <div className="siteLinks">
                    <NavLink className="navLink" href="/">
                        Home
                    </NavLink>
                    <NavLink className="navLink" href="/recipes">
                        Recipes
                    </NavLink>
                    <NavLink className="navLink" href="#!">
                        Dinner Helper
                    </NavLink>
                    <NavLink className="navLink" href="#!">
                        Submit a Recipe
                    </NavLink>
                </div>
                <div className="border"></div>
                <div className="login">
                    <NavLink className="navLink" href="#!">
                        Login
                    </NavLink>
                    <NavLink className="navLink" href="#!">
                        Sign up for Newsletter
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
