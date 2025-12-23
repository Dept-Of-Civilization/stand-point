import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import About from "../pages/About";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}