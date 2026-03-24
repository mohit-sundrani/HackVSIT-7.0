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
                        Get updates &amp; news related to HackVSIT and all upcoming events by ACE. Be the first to know
                        about registrations, announcements, and surprises.
                    </p>
                    <div className="community-btns">
                        <a href="#" className="btn btn-y">
                            Join Discord →
                        </a>
                        <a href="#" className="btn btn-ghost">
                            View All Events
                        </a>
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
                            <div className="cs-lbl">Discord Members</div>
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
