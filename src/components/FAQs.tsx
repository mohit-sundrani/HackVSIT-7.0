import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

function FaqItem({ code, label, question, answer, defaultOpen = false, fullWidth = false }) {
    const [open, setOpen] = useState(defaultOpen);

    function toggle() {
        setOpen((prev) => !prev);
    }

    return (
        <div
            className={`faq-item${open ? " open" : ""}`}
            onClick={toggle}
            style={fullWidth ? { gridColumn: "1/-1" } : {}}>
            <div className="faq-head">
                <div>
                    <div
                        style={{
                            fontSize: label ? "8.5px" : "8px",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            color: label ? "var(--yellow)" : "var(--dim2)",
                            marginBottom: label ? "6px" : "5px"
                        }}>
                        {code}
                        {label ? ` · ${label}` : ""}
                    </div>
                    <div className="faq-q">{question}</div>
                </div>
                <div className="faq-icon">{open ? "−" : "+"}</div>
            </div>
            <div className="faq-answer" style={{ maxHeight: open ? "200px" : "0" }}>
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default function FAQs() {
    const ref = useReveal();

    return (
        <section id="faqs-section" className="sec-wrap reveal" ref={ref}>
            <div className="sec-head">
                <div className="sec-head-left">
                    <div className="sys-label">// SYS-06 &nbsp;·&nbsp; QUERY DATABASE</div>
                    <div className="sys-title">FAQS</div>
                </div>
                <div className="sec-head-right">13 ENTRIES</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginBottom: "2px" }}>
                <FaqItem
                    code="Q-001"
                    label="FEATURED"
                    question="When and where?"
                    answer="25–26 April, Friday and Saturday. Vivekananda Institute of Professional Studies (Outer Ring Rd, AU Block, Ranikhet, Pitampura, New Delhi, Delhi, 110034, India)."
                    defaultOpen
                />
                <FaqItem
                    code="Q-002"
                    label="FEATURED"
                    question="Will there be food arrangements?"
                    answer="We've got you covered! Three proper meals and snacks in between. Development on an empty stomach is just cruel."
                    defaultOpen
                />
            </div>

            <div className="faq-layout">
                <FaqItem
                    code="Q-003"
                    question="Can I participate alone? What is the maximum team size?"
                    answer="You can register individually or as a team. Details on minimum and maximum team size will be shared during registration."
                />
                <FaqItem
                    code="Q-004"
                    question="I am a beginner, can I register?"
                    answer="Absolutely! HackVSIT welcomes all skill levels. Mentors will be present throughout to guide you."
                />
                <FaqItem
                    code="Q-005"
                    question="How much does it cost?"
                    answer="Registration fee details will be announced soon. Follow our socials for updates."
                />
                <FaqItem
                    code="Q-006"
                    question="What is the eligibility criteria?"
                    answer="Open to students from all colleges across India. Specific requirements will be detailed on the registration page."
                />
                <FaqItem
                    code="Q-007"
                    question="What do I need to bring to the event?"
                    answer="Laptop, charger, college ID, and your best ideas. Extension cords and power banks are highly recommended."
                />
                <FaqItem
                    code="Q-008"
                    question="Can I attend remotely?"
                    answer="HackVSIT 7.0 is an in-person event. We strongly encourage on-site attendance for the full experience."
                />
                <FaqItem
                    code="Q-009"
                    question="What are the criteria for shortlisting teams?"
                    answer="Teams shortlisted based on innovation, feasibility, impact, and alignment with the chosen theme."
                />
                <FaqItem
                    code="Q-010"
                    question="Is there an accommodation facility?"
                    answer="Limited accommodation may be available for outstation participants. Reach out to the organizing team for details."
                />
                <FaqItem
                    code="Q-011"
                    question="What benefits do I get from this Hackathon?"
                    answer="Industry mentorship, networking, prizes, certificates, goodies, and the chance to launch your startup idea."
                />
                <FaqItem
                    code="Q-012"
                    question="Where can I get real-time updates?"
                    answer="Join our Discord and follow Instagram and LinkedIn for real-time updates on HackVSIT 7.0 and all ACE events."
                />
                <FaqItem
                    code="Q-013"
                    question="Can I present a project I worked on before the hackathon?"
                    answer="No. All projects must be built from scratch during the hackathon. Pre-existing projects are not eligible."
                    fullWidth
                />
            </div>
        </section>
    );
}
