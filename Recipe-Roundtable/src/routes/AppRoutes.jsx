import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import RecipePage from "../pages/RecipePage";
import { AboutPage } from "../pages/AboutPage";

const AppRoutes = (props) => {
    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route path="/" element={<HomePage {...props} />} />
            <Route path="/recipes" element={<RecipesPage {...props} />} />
            <Route
                path="/recipes/:recipeId"
                element={<RecipePage {...props} />}
            />
            <Route path="/about" element={<AboutPage {...props} />} />

            {/* <Route path="/about" element={<AboutPage {...props} />} />

            <Route
                path="/bitcoinRates"
                element={<BitcoinRatesPage {...props} />}
            />

            <Route path="/login" element={<LoginPage {...props} />} />

            <Route path="/card" element={<MuiCard {...props} />} />

            <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    );
};

export default AppRoutes;
