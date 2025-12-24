import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Result from "../pages/Result";
import About from "../pages/About";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/results" element={<Result />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}