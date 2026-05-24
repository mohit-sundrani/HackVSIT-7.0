import { useReveal } from "../hooks/useReveal";

export default function Community() {
    const ref = useReveal();

    return (
        <section id="community-section" className="sec-wrap reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-head-left">
                    <div className="sys-label">// SYS-07 &nbsp;·&nbsp; CONNECT</div>
                </div>
                <div className="sec-head-right">SIGNAL OPEN</div>
            </div>

            <div className="community-panel">
                <div className="community-left">
                    <div className="sys-label">// BROADCASTING</div>
                    <div className="community-big">
                        JOIN
                        <br />
                        OUR
                        <br />
                        <span className="outline">COMMUNITY</span>
                    </div>
                    <p className="community-desc">
                        Get the latest news on HackVSIT and all other upcoming ACE events. Be the first to know about
                        registrations, announcements, and surprises!
                    </p>
                    <div className="community-btns">
                        <a href="https://discord.gg/qMcHwvskew" className="btn btn-y">
                            Join Discord →
                        </a>
                        <div className="social-actions">
                            <a href="https://www.instagram.com/acevips/" className="soc-action" title="Instagram">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/vipsace/" className="soc-action" title="LinkedIn">
                                <svg viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://hackvsit-6.devfolio.co/projects" className="soc-action" title="Devfolio">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="devfolio"
                                    x="0"
                                    y="0"
                                    enable-background="new 0 0 60.3 66.2"
                                    version="1.1"
                                    viewBox="0 0 60.3 66.2"
                                >
                                    <g id="Layer_2_1_">
                                        <g id="Layer_1-2_1_">
                                            <path
                                                fill=""
                                                d="M60.3,36.4C60.3,52,48.6,64.7,33.8,66c0,0-19.1,0.5-25.4-0.1c-2.4-0.3-4.4-1.8-5.3-4c0.9,0.4,1.8,0.7,2.8,0.8
			C8,62.9,11.5,63,16.4,63c7.2,0,15.1-0.2,15.1-0.2h0.1c7.9-0.7,15.2-4.3,20.4-10.2c4.5-5,7.4-11.3,8.2-17.9
			C60.3,35.2,60.3,35.8,60.3,36.4z"
                                            ></path>
                                            <path
                                                fill=""
                                                d="M58,30c0,15.6-11.7,28.3-26.6,29.5c0,0-19.1,0.5-25.4-0.1c-3.4-0.3-5.9-3.5-6-7.1l0.1-45
			c0.1-3.6,2.7-6.8,6.1-7.1c6.3-0.5,25.4,0.1,25.4,0.1C46.4,1.6,58,14.4,58,30z"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="community-right">
                    <div className="comm-ring-wrap">
                        <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="70" cy="70" r="65" fill="none" stroke="rgba(245,197,24,0.2)" strokeWidth="1" />
                            <circle
                                cx="70"
                                cy="70"
                                r="55"
                                fill="none"
                                stroke="rgba(245,197,24,0.1)"
                                strokeWidth="1"
                                strokeDasharray="4 6"
                            />
                            <circle cx="70" cy="70" r="45" fill="none" stroke="rgba(245,197,24,0.08)" strokeWidth="1" />
                        </svg>
                        <div className="comm-ring-inner">
                            <div className="comm-ring-center">
                                ACE<span>COMMUNITY</span>
                            </div>
                        </div>
                    </div>

                    <div className="comm-stats">
                        <div className="comm-stat">
                            <div className="cs-val">2K+</div>
                            <div className="cs-lbl">Registrations</div>
                        </div>
                        <div className="comm-stat">
                            <div className="cs-val">7th</div>
                            <div className="cs-lbl">Edition</div>
                        </div>
                        <div className="comm-stat">
                            <div className="cs-val">24H</div>
                            <div className="cs-lbl">Non-stop Build</div>
                        </div>
                        <div className="comm-stat">
                            <div className="cs-val">∞</div>
                            <div className="cs-lbl">Possibilities</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
