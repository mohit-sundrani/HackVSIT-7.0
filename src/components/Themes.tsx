import { useReveal } from "../hooks/useReveal";

export default function Themes() {
    const ref = useReveal();

    return (
        <section id="themes-section" className="sec-wrap reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-head-left">
                    <div className="sys-label">// SYS-03 &nbsp;·&nbsp; CHALLENGE DOMAINS</div>
                    <div className="sys-title">
                        HACK
                        <br />
                        THEMES
                    </div>
                </div>
                <div className="sec-head-right">6 DOMAINS · PICK ONE</div>
            </div>

            <div className="themes-bento">
                <div className="theme-tile t1">
                    <div className="tile-bg bg-sustain">
                        <svg
                            viewBox="0 0 220 480"
                            style={{ width: "100%", height: "100%" }}
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice">
                            <rect width="220" height="480" fill="#081408" />
                            <rect x="20" y="180" width="18" height="280" fill="rgba(0,180,70,0.1)" />
                            <rect x="42" y="140" width="22" height="320" fill="rgba(0,180,70,0.12)" />
                            <rect x="68" y="100" width="28" height="360" fill="rgba(0,200,80,0.15)" />
                            <rect x="100" y="130" width="20" height="330" fill="rgba(0,180,70,0.1)" />
                            <rect x="124" y="80" width="32" height="380" fill="rgba(0,200,80,0.18)" />
                            <rect x="160" y="110" width="22" height="350" fill="rgba(0,180,70,0.12)" />
                            <rect x="186" y="150" width="18" height="310" fill="rgba(0,180,70,0.1)" />
                            <rect x="74" y="115" width="4" height="4" fill="rgba(0,255,100,0.4)" />
                            <rect x="82" y="115" width="4" height="4" fill="rgba(0,255,100,0.3)" />
                            <rect x="130" y="95" width="5" height="5" fill="rgba(0,255,100,0.45)" />
                            <rect x="140" y="95" width="5" height="5" fill="rgba(0,255,100,0.3)" />
                            <ellipse cx="110" cy="60" rx="90" ry="60" fill="rgba(0,255,80,0.05)" />
                        </svg>
                    </div>
                    <div className="tile-index">01</div>
                    <div className="tile-badge">OPEN</div>
                    <div className="tile-content">
                        <div className="tile-name">Sustainability</div>
                        <div className="tile-desc">
                            Responsible innovation encompassing environmental, social, and economic aspects.
                        </div>
                    </div>
                </div>

                <div className="theme-tile t2">
                    <div className="tile-bg bg-web3">
                        <svg
                            viewBox="0 0 320 480"
                            style={{ width: "100%", height: "100%" }}
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice">
                            <rect width="320" height="480" fill="#050810" />
                            <rect
                                x="60"
                                y="80"
                                width="200"
                                height="130"
                                rx="4"
                                fill="rgba(0,130,255,0.1)"
                                stroke="rgba(0,150,255,0.2)"
                                strokeWidth="1"
                            />
                            <rect x="65" y="85" width="190" height="120" fill="rgba(0,80,180,0.12)" />
                            <rect x="72" y="94" width="70" height="4" rx="1" fill="rgba(0,200,255,0.35)" />
                            <rect x="72" y="103" width="110" height="4" rx="1" fill="rgba(0,200,255,0.22)" />
                            <rect x="72" y="112" width="55" height="4" rx="1" fill="rgba(0,255,200,0.28)" />
                            <rect x="72" y="121" width="90" height="4" rx="1" fill="rgba(0,200,255,0.2)" />
                            <rect x="72" y="130" width="65" height="4" rx="1" fill="rgba(0,200,255,0.3)" />
                            <rect x="72" y="148" width="75" height="4" rx="1" fill="rgba(0,200,255,0.22)" />
                            <circle
                                cx="160"
                                cy="280"
                                r="16"
                                fill="none"
                                stroke="rgba(0,200,255,0.3)"
                                strokeWidth="1.5"
                            />
                            <circle
                                cx="220"
                                cy="250"
                                r="12"
                                fill="none"
                                stroke="rgba(0,200,255,0.25)"
                                strokeWidth="1"
                            />
                            <circle
                                cx="240"
                                cy="310"
                                r="10"
                                fill="none"
                                stroke="rgba(0,200,255,0.22)"
                                strokeWidth="1"
                            />
                            <circle
                                cx="190"
                                cy="340"
                                r="12"
                                fill="none"
                                stroke="rgba(0,200,255,0.22)"
                                strokeWidth="1"
                            />
                            <circle
                                cx="100"
                                cy="300"
                                r="14"
                                fill="none"
                                stroke="rgba(0,200,255,0.28)"
                                strokeWidth="1.5"
                            />
                            <line x1="160" y1="280" x2="220" y2="250" stroke="rgba(0,200,255,0.15)" strokeWidth="1" />
                            <line x1="220" y1="250" x2="240" y2="310" stroke="rgba(0,200,255,0.15)" strokeWidth="1" />
                            <line x1="240" y1="310" x2="190" y2="340" stroke="rgba(0,200,255,0.15)" strokeWidth="1" />
                            <line x1="190" y1="340" x2="100" y2="300" stroke="rgba(0,200,255,0.15)" strokeWidth="1" />
                            <line x1="100" y1="300" x2="160" y2="280" stroke="rgba(0,200,255,0.15)" strokeWidth="1" />
                            <circle cx="160" cy="280" r="4" fill="rgba(0,200,255,0.5)" />
                            <circle cx="220" cy="250" r="3" fill="rgba(0,200,255,0.4)" />
                            <circle cx="100" cy="300" r="4" fill="rgba(0,200,255,0.5)" />
                        </svg>
                    </div>
                    <div className="tile-index">02</div>
                    <div className="tile-badge">OPEN</div>
                    <div className="tile-content">
                        <div className="tile-name">
                            Web3 &amp;
                            <br />
                            Blockchain
                        </div>
                        <div className="tile-desc">
                            Privacy, decentralization, and building a freer internet away from government overreach.
                        </div>
                    </div>
                </div>

                <div className="theme-tile t3">
                    <div className="tile-bg bg-hack4good">
                        <svg
                            viewBox="0 0 220 240"
                            style={{ width: "100%", height: "100%" }}
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice">
                            <rect width="220" height="240" fill="#120408" />
                            <ellipse
                                cx="110"
                                cy="110"
                                rx="75"
                                ry="80"
                                fill="none"
                                stroke="rgba(255,80,180,0.18)"
                                strokeWidth="2"
                            />
                            <ellipse cx="110" cy="110" rx="52" ry="56" fill="rgba(200,40,140,0.1)" />
                            <ellipse cx="88" cy="92" rx="16" ry="11" fill="rgba(255,50,200,0.3)" />
                            <ellipse cx="132" cy="92" rx="16" ry="11" fill="rgba(255,50,200,0.3)" />
                            <ellipse cx="88" cy="92" rx="9" ry="7" fill="rgba(255,120,220,0.5)" />
                            <ellipse cx="132" cy="92" rx="9" ry="7" fill="rgba(255,120,220,0.5)" />
                            <line x1="30" y1="110" x2="64" y2="110" stroke="rgba(255,80,180,0.2)" strokeWidth="1" />
                            <line x1="156" y1="110" x2="190" y2="110" stroke="rgba(255,80,180,0.2)" strokeWidth="1" />
                        </svg>
                    </div>
                    <div className="tile-index">03</div>
                    <div className="tile-badge">OPEN</div>
                    <div className="tile-content">
                        <div className="tile-name">Hack For Good</div>
                        <div className="tile-desc">Code with purpose. Drive positive societal change.</div>
                    </div>
                </div>

                <div className="theme-tile t4">
                    <div className="tile-bg bg-health">
                        <svg
                            viewBox="0 0 220 240"
                            style={{ width: "100%", height: "100%" }}
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice">
                            <rect width="220" height="240" fill="#050810" />
                            <rect
                                x="80"
                                y="20"
                                width="60"
                                height="200"
                                rx="2"
                                fill="rgba(40,80,200,0.1)"
                                stroke="rgba(40,130,255,0.15)"
                                strokeWidth="1"
                            />
                            <rect x="93" y="38" width="8" height="8" fill="rgba(80,180,255,0.3)" />
                            <rect x="105" y="38" width="8" height="8" fill="rgba(80,180,255,0.25)" />
                            <rect x="93" y="52" width="8" height="8" fill="rgba(80,180,255,0.2)" />
                            <rect x="105" y="52" width="8" height="8" fill="rgba(80,180,255,0.3)" />
                            <polyline
                                points="10,160 30,160 40,140 50,180 60,150 70,160 90,160 100,145 110,175 120,160 140,160"
                                fill="none"
                                stroke="rgba(0,220,180,0.3)"
                                strokeWidth="1.5"
                            />
                            <ellipse cx="110" cy="230" rx="110" ry="40" fill="rgba(0,60,200,0.06)" />
                        </svg>
                    </div>
                    <div className="tile-index">04</div>
                    <div className="tile-badge">OPEN</div>
                    <div className="tile-content">
                        <div className="tile-name">Health &amp; Wellness</div>
                        <div className="tile-desc">Improve human life through health-tech innovation.</div>
                    </div>
                </div>
            </div>

            <div className="t6-row">
                <div className="theme-tile">
                    <div className="tile-bg bg-fintech">
                        <svg
                            viewBox="0 0 580 200"
                            style={{ width: "100%", height: "100%" }}
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice">
                            <rect width="580" height="200" fill="#0a0a04" />
                            <rect
                                x="30"
                                y="20"
                                width="240"
                                height="150"
                                rx="3"
                                fill="rgba(50,50,0,0.18)"
                                stroke="rgba(200,200,0,0.12)"
                                strokeWidth="1"
                            />
                            <rect x="35" y="25" width="230" height="18" fill="rgba(0,0,0,0.4)" />
                            <rect x="42" y="30" width="36" height="8" rx="1" fill="rgba(245,197,24,0.3)" />
                            <polyline
                                points="45,140 65,118 85,128 110,95 135,108 158,78 178,90 202,65 222,75"
                                fill="none"
                                stroke="rgba(0,210,100,0.55)"
                                strokeWidth="2"
                            />
                            <polyline
                                points="45,150 65,145 85,148 110,135 135,140 158,125 178,130 202,115 222,120"
                                fill="none"
                                stroke="rgba(245,197,24,0.35)"
                                strokeWidth="1.5"
                            />
                            <line x1="45" y1="100" x2="225" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                            <line x1="45" y1="120" x2="225" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                            <line x1="45" y1="140" x2="225" y2="140" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                        </svg>
                    </div>
                    <div className="tile-index">05</div>
                    <div className="tile-badge">OPEN</div>
                    <div className="tile-content">
                        <div className="tile-name">Fintech &amp; Financial Inclusion</div>
                        <div className="tile-desc">Greater financial accessibility for all through technology.</div>
                    </div>
                </div>

                <div className="theme-tile">
                    <div className="tile-bg bg-edtech">
                        <svg
                            viewBox="0 0 580 200"
                            style={{ width: "100%", height: "100%" }}
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice">
                            <rect width="580" height="200" fill="#080510" />
                            <rect
                                x="260"
                                y="15"
                                width="180"
                                height="120"
                                fill="rgba(50,40,80,0.18)"
                                stroke="rgba(140,90,255,0.15)"
                                strokeWidth="1"
                            />
                            <line x1="275" y1="40" x2="360" y2="40" stroke="rgba(180,130,255,0.22)" strokeWidth="2" />
                            <line x1="275" y1="52" x2="340" y2="52" stroke="rgba(180,130,255,0.18)" strokeWidth="2" />
                            <line x1="275" y1="64" x2="355" y2="64" stroke="rgba(180,130,255,0.14)" strokeWidth="2" />
                            <rect
                                x="375"
                                y="30"
                                width="32"
                                height="22"
                                rx="2"
                                fill="rgba(140,90,255,0.12)"
                                stroke="rgba(140,90,255,0.25)"
                                strokeWidth="1"
                            />
                            <circle cx="90" cy="75" r="22" fill="rgba(90,70,140,0.2)" />
                            <rect x="68" y="98" width="44" height="70" rx="4" fill="rgba(80,60,120,0.2)" />
                        </svg>
                    </div>
                    <div className="tile-index">06</div>
                    <div className="tile-badge">OPEN</div>
                    <div className="tile-content">
                        <div className="tile-name">Education &amp; EdTech</div>
                        <div className="tile-desc">
                            Transform learning with technology and socially impactful solutions.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
