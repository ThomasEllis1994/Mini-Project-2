export default function Navbar() {
    return (
        <div className="navbar">
            <div className="leftNav">
                <a href="#!">
                    <img
                        src="../../src/photos/Site-Photos/logo.png"
                        alt="Recipe Roundtable Logo"
                        style={{
                            height: 100,
                            width: 100,
                        }}
                    />
                </a>
            </div>
            <div className="navLinks">
                <div></div>
                <div className="siteLinks">
                    <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Dinner Helper</a>
                    <a href="#!">Submit a Recipe</a>
                </div>
                <div className="borderDiv"></div>
                <div className="login">
                    <a href="#!">Login</a>
                    <a href="#!">Sign up for Newsletter</a>
                </div>
            </div>
        </div>
    );
}
