import { useReveal } from "../hooks/useReveal";

export default function Timeline() {
    const ref = useReveal();

    return (
        <section id="timeline-section" className="sec-wrap reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-head-left">
                    <div className="sys-label">// SYS-05 &nbsp;·&nbsp; EVENT SCHEDULE</div>
                    <div className="sys-title">TIMELINE</div>
                </div>
                <div className="sec-head-right">25-26 APR · 2 DAYS</div>
            </div>

            <div className="timeline-grid">
                <div className="tl-card">
                    <div className="tl-header">
                        <div className="tl-title">DAY 01 - 25 APRIL 2026</div>
                        <div className="tl-meta">SCHEDULE PENDING</div>
                    </div>
                    <div className="tl-body">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            style={{ opacity: 0.2, position: "relative", zIndex: 1 }}
                        >
                            <rect
                                x="4"
                                y="4"
                                width="40"
                                height="40"
                                rx="2"
                                stroke="rgba(245,197,24,0.8)"
                                strokeWidth="1.5"
                            />
                            <rect x="4" y="14" width="40" height="1" fill="rgba(245,197,24,0.5)" />
                            <rect x="14" y="4" width="1" height="40" fill="rgba(245,197,24,0.4)" />
                            <rect x="10" y="22" width="28" height="4" rx="1" fill="rgba(245,197,24,0.3)" />
                            <rect x="10" y="30" width="20" height="4" rx="1" fill="rgba(245,197,24,0.2)" />
                        </svg>
                        <div className="tl-ph">TIMELINE IMAGE</div>
                        <div className="tl-ph-sub">// Image Placeholder - Day 1 Schedule</div>
                    </div>
                </div>

                <div className="tl-card">
                    <div className="tl-header">
                        <div className="tl-title">DAY 02 - 26 APRIL 2026</div>
                        <div className="tl-meta">SCHEDULE PENDING</div>
                    </div>
                    <div className="tl-body">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            style={{ opacity: 0.2, position: "relative", zIndex: 1 }}
                        >
                            <rect
                                x="4"
                                y="4"
                                width="40"
                                height="40"
                                rx="2"
                                stroke="rgba(245,197,24,0.8)"
                                strokeWidth="1.5"
                            />
                            <rect x="4" y="14" width="40" height="1" fill="rgba(245,197,24,0.5)" />
                            <rect x="14" y="4" width="1" height="40" fill="rgba(245,197,24,0.4)" />
                            <rect x="10" y="22" width="28" height="4" rx="1" fill="rgba(245,197,24,0.3)" />
                            <rect x="10" y="30" width="20" height="4" rx="1" fill="rgba(245,197,24,0.2)" />
                        </svg>
                        <div className="tl-ph">TIMELINE IMAGE</div>
                        <div className="tl-ph-sub">// Image Placeholder - Day 2 Schedule</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
