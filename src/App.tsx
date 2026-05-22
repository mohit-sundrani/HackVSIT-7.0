import "./index.css";
import Navbar from "./components/Navbar";
import Hero2 from "./components/Hero2";
import About from "./components/About";
import Video from "./components/Video";
import Themes from "./components/Themes";
import Sponsors from "./components/Sponsors";
import FAQs from "./components/FAQs";
import Community from "./components/Community";
import Social from "./components/Social";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
            <Hero2/>
            {/* <Hero /> */}
            <About />
            <Video />
            {/* <Countdown /> */}
            <Themes />
            <Sponsors />
            {/* <Timeline /> */}
            <FAQs />
            <Community />
            <Social />
            <Partner />
            <Footer />
            </main>
            

            
        </>
    );
}
