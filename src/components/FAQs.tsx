import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

interface FAQCardProps {
    code: string;
    label?: string;
    question: string;
    answer: string;
    defaultOpen?: boolean;
    fullWidth?: boolean;
}

function FaqItem({ code, label, question, answer, defaultOpen = false, fullWidth = false }: FAQCardProps) {
    const [open, setOpen] = useState(defaultOpen);

    function toggle() {
        setOpen((prev) => !prev);
    }

    return (
        <div
            className={`faq-item ${open ? "open" : ""}`}
            onClick={toggle}
            style={fullWidth ? { gridColumn: "1/-1" } : {}}
        >
            <div className="faq-head">
                <div>
                    <div
                        style={{
                            fontSize: label ? "8.5px" : "8px",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            color: label ? "var(--yellow)" : "var(--dim2)",
                            marginBottom: label ? "6px" : "5px",
                        }}
                    >
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
                    answer="HackVSIT to be held at Vivekananda Institute of Professional Studies (Outer Ring Road, Pitampura, Delhi). Dates to be announced yet."
                    defaultOpen
                />
                <FaqItem
                    code="Q-002"
                    label="FEATURED"
                    question="Will there be food arrangements?"
                    answer="We've got you covered! You’ll get three proper meals plus snacks in between. Coding on an empty stomach is just cruel."
                    defaultOpen
                />
            </div>

            <div className="faq-layout">
                <FaqItem
                    code="Q-003"
                    question="Can I participate alone? What is the maximum team size?"
                    answer="Yes, individual registrations are welcome. Full details on team composition and registration will be shared during registration."
                />
                <FaqItem
                    code="Q-004"
                    question="I am a beginner, can I register?"
                    answer="Absolutely! HackVSIT welcomes participants of all skill levels. We’ll have experienced mentors on-site 24/7 to help and guide you."
                />
                <FaqItem
                    code="Q-005"
                    question="How much does it cost?"
                    answer="Registration is free for participants"
                />
                <FaqItem
                    code="Q-006"
                    question="What is the eligibility criteria?"
                    answer="Open to students from all colleges across India. Specific requirements will be detailed on the registration page."
                />
                <FaqItem
                    code="Q-007"
                    question="What should I bring besides my laptop?"
                    answer="Don't forget: Your chargers and college ID. We highly recommend bringing an extension cord to stay powered up and a pillow for when you finally hit a wall. Bring your best ideas-we'll provide the rest!"
                />
                <FaqItem
                    code="Q-008"
                    question="Can I attend remotely?"
                    answer="HackVSIT 7.0 is an in-person event. We strongly encourage on-site attendance for the full experience."
                />
                <FaqItem
                    code="Q-009"
                    question="What is the criteria for shortlisting teams?"
                    answer="Selection is based on your idea's innovation, feasibility, and impact, as well as your team's technical background (GitHub/LinkedIn). We’re looking for passionate hackers ready to solve real-world problems!"
                />
                <FaqItem
                    code="Q-010"
                    question="Is there an accommodation facility?"
                    answer="Since HackVSIT is a 24-hour event, the venue remains open overnight for all participants. Limited accommodation may be available for outstation participants. You can reach out to the organizing team for details."
                />
                <FaqItem
                    code="Q-011"
                    question="What are the benefits of participating?"
                    answer="Participants will receive official certification, mentorship from industry experts, and access to a vibrant networking community. Top teams will win significant prizes and goodies, with additional support provided for those looking to turn their projects into viable startups."
                />
                <FaqItem
                    code="Q-012"
                    question="Where can I get real-time updates?"
                    answer="The best way to stay updated is to join our official Discord server, where we share live announcements. You can also follow our Instagram and LinkedIn pages for real-time news on HackVSIT 7.0 and all upcoming ACE events! "
                />
                <FaqItem
                    code="Q-013"
                    question="Can I present a project I worked on before the hackathon?"
                    answer="No. To keep the competition fair, all projects must be built from scratch during the 24 hours. Pre-existing projects are not eligible for submission at HackVSIT 7.0."
                    fullWidth
                />
            </div>
        </section>
    );
}
