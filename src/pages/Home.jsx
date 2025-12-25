import About from "./About.jsx";
import ByLaws from "../components/Bylaws.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Prizes from "../components/Prizes.jsx";
import Rounds from "../components/Rounds.jsx";
import Timeline from "../components/TimeLine.jsx";
export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Rounds />
            <Prizes />
            <Timeline />
            <ByLaws />
            <Footer />
        </>
    )
}