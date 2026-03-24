export default function Navbar() {
    return (
        <nav>
            <a href="#hero" className="nav-logo">
                HACK<span>VSIT</span> 7.0
            </a>
            <ul className="nav-links">
                <li>
                    <a href="#about">Home</a>
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
        </nav>
    );
}
