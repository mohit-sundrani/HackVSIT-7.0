import "./index.css";
import Navbar from "./components/Navbar";
import Hero2 from "./components/Hero2";
import About from "./components/About";
import Video from "./components/Video";
import FAQs from "./components/FAQs";
import Community from "./components/Community";
import Partner from "./components/Partner";
import Footer from "./components/Footer";
import { CustomCursor } from "./components/Cursor";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero2 />
                {/* <Hero /> */}
                <About />
                <Video />
                {/* <Countdown /> */}
                {/*<Themes />*/}
                {/*<Sponsors />*/}
                {/* <Timeline /> */}
                <FAQs />
                <Community />
                {/*<Social />*/}
                <Partner />
                <Footer />
            </main>
            <CustomCursor imageUrl="/cursor.png" />
        </>
    );
}
