import { useReveal } from "../hooks/useReveal";

export default function Partner() {
    const ref = useReveal();

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
                        We are looking forward to collaborations with companies, individuals, communities, and more who
                        can support HackVSIT 7.0. Fill the form and we'll get back to you.
                    </p>
                    <div className="partner-tags">
                        <div className="ptag hi">Companies</div>
                        <div className="ptag hi">Communities</div>
                        <div className="ptag">Individuals</div>
                        <div className="ptag">Media</div>
                        <div className="ptag">Investors</div>
                    </div>
                </div>

                <div className="partner-form-wrap">
                    <div className="data-row" style={{ marginBottom: "20px" }}>
                        <div className="dot"></div>SUBMIT INQUIRY
                    </div>
                    <form className="partner-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="pf-row">
                            <input className="pf-field" type="text" placeholder="Your Name / Company" />
                            <input className="pf-field" type="email" placeholder="Email Address" />
                        </div>
                        <input className="pf-field" type="text" placeholder="Website or Social Link" />
                        <select className="pf-field" defaultValue="">
                            <option value="" disabled>
                                Type of Partnership
                            </option>
                            <option>Title Sponsor</option>
                            <option>Platinum Sponsor</option>
                            <option>Gold Sponsor</option>
                            <option>Silver Sponsor</option>
                            <option>Community Partner</option>
                            <option>Media Partner</option>
                        </select>
                        <textarea
                            className="pf-field pf-area"
                            placeholder="Tell us about yourself and how you'd like to partner..."
                        ></textarea>
                        <button type="submit" className="btn btn-y" style={{ alignSelf: "flex-start" }}>
                            Submit Inquiry →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
