import { useReveal } from "../hooks/useReveal";

export default function About() {
    const ref = useReveal();

    return (
        <section id="about-section" className="sec-wrap reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-head-left">
                    <div className="sys-label">// SYS-01 &nbsp;·&nbsp; WHAT IS HACKVSIT 7.0</div>
                    <div className="sys-title">
                        BUILD THE
                        <br />
                        FUTURE
                    </div>
                </div>
                <div className="sec-head-right">
                    <div style={{ width: "5px", height: "5px", background: "var(--yellow)" }}></div>
                    ACTIVE · 2026
                </div>
            </div>

            <div className="about-bento">
                <div className="bento-cell about-main">
                    <div className="bracket tl"></div>
                    <div className="bracket tr"></div>
                    <div className="bracket bl"></div>
                    <div className="bracket br"></div>
                    <div className="corner-tag tl">UA-7.0</div>
                    <div className="corner-tag tr">VIPS-TC</div>
                    <div className="data-row">
                        <div className="dot"></div>SYSTEM ACTIVE
                    </div>
                    <p className="about-desc">
                        For a full <strong>24 hours</strong>, you'll collaborate with your team to dream up and build
                        the technology of tomorrow - to solve the problems we face today. Creativity, teamwork, and
                        pushing the limits of innovation.
                    </p>
                    <p className="about-desc" style={{ marginTop: "12px" }}>
                        Come to receive <strong>mentoring by industry professionals</strong> and network with judges to
                        turn your idea into a full-fledged startup or project.
                    </p>
                    <div className="hbar">
                        <div className="hbar-seg fill"></div>
                        <div className="hbar-seg fill"></div>
                        <div className="hbar-seg fill"></div>
                        <div className="hbar-seg halffill"></div>
                        <div className="hbar-seg"></div>
                        <div className="hbar-seg"></div>
                        <div className="hbar-seg"></div>
                        <div className="hbar-seg"></div>
                    </div>
                    <div
                        style={{
                            fontSize: "8px",
                            letterSpacing: "0.2em",
                            color: "var(--dim2)",
                            marginTop: "6px",
                            fontWeight: 500,
                        }}
                    >
                        PROGRESS: 72% - REGISTRATIONS OPEN
                    </div>
                    <div className="bg-num">7.0</div>
                </div>

                <div className="bento-cell about-stat">
                    <div className="bracket tl"></div>
                    <div className="bracket br"></div>
                    <div className="corner-tag tl">T-001</div>
                    <div className="data-row">
                        <div className="dot"></div>DURATION
                    </div>
                    <div className="big-val">24H</div>
                    <div className="val-label">Non-stop hacking</div>
                </div>

                <div className="bento-cell about-stat">
                    <div className="bracket tl"></div>
                    <div className="bracket br"></div>
                    <div className="corner-tag tl">T-002</div>
                    <div className="data-row">
                        <div className="dot"></div>PARTICIPANTS
                    </div>
                    <div className="big-val">200+</div>
                    <div className="val-label">Expected hackers</div>
                </div>

                <div className="bento-cell about-venue">
                    <div className="bracket tl"></div>
                    <div className="bracket br"></div>
                    <div className="venue-pin">Venue</div>
                    <div className="venue-sep"></div>
                    <div className="venue-addr">
                        Vivekananda Institute of Professional Studies - Technical Campus
                        <br />
                        Pitampura, New Delhi, Delhi 110034, India
                    </div>
                    <div className="venue-sep" style={{ marginLeft: "auto" }}></div>
                    <div
                        style={{
                            fontFamily: "var(--font)",
                            fontSize: "32px",
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.06)",
                            flexShrink: 0,
                            lineHeight: 1,
                        }}
                    >
                        VIPS-TC
                    </div>
                </div>
            </div>
        </section>
    );
}
