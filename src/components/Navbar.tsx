export default function Navbar() {
    return (
        <div className="absolute top-0 left-0 right-0 z-500 flex items-center justify-between px-6 sm:px-10 lg:px-16 h-10 sm:h-15 bg-transparent">
            <a href="#hero" className="nav-logo">
                HACK<span>VSIT</span> 7.0
            </a>

            <ul className="nav-links">
                <li>
                    <a href="#hero">Home</a>
                </li>
                <li>
                    <a href="#themes-section">Themes</a>
                </li>
                <li>
                    <a href="#timeline-section">Timeline</a>
                </li>
                <li>
                    <a href="#faqs-section">FAQs</a>
                </li>
                <li>
                    <a href="#partner-section">Partner With Us</a>
                </li>
                <li>
                    <a href="#" className="nav-cta">
                        Register
                    </a>
                </li>
            </ul>
        </div>
    );
}
