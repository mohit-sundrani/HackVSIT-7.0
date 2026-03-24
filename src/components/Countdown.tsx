import { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

function pad(n) {
    return String(n).padStart(2, "0");
}

export default function Countdown() {
    const ref = useReveal();
    const [time, setTime] = useState({ days: "00", hours: "00", mins: "00", secs: "00" });

    useEffect(() => {
        function tick() {
            const t = new Date("2026-04-25T09:00:00+05:30") - new Date();
            if (t <= 0) {
                setTime({ days: "00", hours: "00", mins: "00", secs: "00" });
                return;
            }
            setTime({
                days: pad(Math.floor(t / 864e5)),
                hours: pad(Math.floor((t % 864e5) / 36e5)),
                mins: pad(Math.floor((t % 36e5) / 6e4)),
                secs: pad(Math.floor((t % 6e4) / 1e3)),
            });
        }
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div id="countdown-section" className="sec-wrap reveal" style={{ paddingTop: 0 }} ref={ref}>
            <div className="countdown-panel">
                <div className="cd-left">
                    <div className="sys-label">// INITIATE</div>
                    <div className="cd-event" style={{ marginTop: "8px" }}>
                        Hackathon
                        <br />
                        Starts In
                    </div>
                    <div className="cd-sub">25 April 2026 · 09:00 IST</div>
                </div>
                <div className="cd-center">
                    <div className="cd-block">
                        <span className="cd-num">{time.days}</span>
                        <span className="cd-unit">Days</span>
                    </div>
                    <div className="cd-sep">:</div>
                    <div className="cd-block">
                        <span className="cd-num">{time.hours}</span>
                        <span className="cd-unit">Hours</span>
                    </div>
                    <div className="cd-sep">:</div>
                    <div className="cd-block">
                        <span className="cd-num">{time.mins}</span>
                        <span className="cd-unit">Mins</span>
                    </div>
                    <div className="cd-sep">:</div>
                    <div className="cd-block">
                        <span className="cd-num">{time.secs}</span>
                        <span className="cd-unit">Secs</span>
                    </div>
                </div>
                <div className="cd-right">
                    <div className="sys-label" style={{ textAlign: "right" }}>
                        Event Date
                    </div>
                    <div className="cd-date">
                        25 – 26
                        <br />
                        APR 2026
                    </div>
                    <div className="cd-venue-small">VIPS-TC · New Delhi</div>
                </div>
            </div>
        </div>
    );
}
