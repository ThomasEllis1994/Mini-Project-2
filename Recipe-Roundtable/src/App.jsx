import "./App.css";
// import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "../src/components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <AppRoutes />
        </>
    );
}

export default App;
