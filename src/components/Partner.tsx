import { useState, type SubmitEvent } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Partner() {
    const ref = useReveal();
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const onSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        formData.append("access_key", "b091b7f8-eb81-4fa8-895b-7952c22ade54");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();

            if (data.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const isSending = status === "sending";

    return (
        <section id="partner-section" className="sec-wrap reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-head-left">
                    <div className="sys-label">// SYS-08 &nbsp;·&nbsp; COLLABORATION</div>
                    <div className="sys-title">
                        PARTNER
                        <br />
                        WITH US
                    </div>
                </div>
                <div className="sec-head-right">OPEN FOR APPLICATIONS</div>
            </div>
            <div className="partner-grid">
                <div className="partner-info">
                    <div className="bracket tl"></div>
                    <div className="bracket br"></div>
                    <div className="data-row">
                        <div className="dot"></div>ACCEPTING PARTNERS
                    </div>
                    <div className="partner-info-title">
                        COLLABORATE
                        <br />
                        WITH US
                    </div>
                    <p>
                        We are looking forward to collaborating with companies, individuals, and communities to support
                        HackVSIT 7.0. Please fill out the form, and we will get back to you shortly.
                    </p>
                    <div className="partner-tags">
                        <div className="ptag hi">Companies</div>
                        <div className="ptag hi">Communities</div>
                    </div>
                </div>
                <div className="partner-form-wrap">
                    <div className="data-row" style={{ marginBottom: "20px" }}>
                        <div className="dot"></div>SUBMIT INQUIRY
                    </div>
                    <form className="partner-form" onSubmit={onSubmit}>
                        <div className="pf-row">
                            <input
                                className="pf-field"
                                type="text"
                                name="name"
                                placeholder="Your Name / Company"
                                required
                                disabled={isSending}
                            />
                            <input
                                className="pf-field"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                disabled={isSending}
                            />
                        </div>
                        <input
                            className="pf-field"
                            type="text"
                            name="website"
                            placeholder="Website or Social Link"
                            disabled={isSending}
                        />
                        <select
                            className="pf-field"
                            name="partnership_type"
                            defaultValue=""
                            required
                            disabled={isSending}
                        >
                            <option value="" disabled>
                                Type of Partnership
                            </option>
                            <option>Monetary Sponsor</option>
                            <option>In Kind Sponsor</option>
                            <option>Community Partner</option>
                            <option>Refreshment Partner</option>
                        </select>
                        <textarea
                            className="pf-field pf-area"
                            name="message"
                            placeholder="Tell us about yourself and how you'd like to partner..."
                            required
                            disabled={isSending}
                        ></textarea>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <button
                                type="submit"
                                className="btn btn-y"
                                style={{ alignSelf: "flex-start" }}
                                disabled={isSending}
                            >
                                {isSending ? "Sending..." : "Submit Inquiry →"}
                            </button>
                            {status === "success" && (
                                <span style={{ color: "var(--green, #4ade80)", fontSize: "0.85rem" }}>
                                    Inquiry sent successfully
                                </span>
                            )}
                            {status === "error" && (
                                <span style={{ color: "var(--red, #f87171)", fontSize: "0.85rem" }}>
                                    Something went wrong. Try again.
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
