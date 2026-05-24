import Aurora from "./Aurora";

export default function Hero2() {
    return (
        <div className=" flex items-center justify-center overflow-hidden text-[var(--white)] bg-[#0E0E0E]">
            {/* Background Layers */}
            <div className="pointer-events-none absolute inset-0">
                <Aurora colorStops={["#4b3c0f", "#8c7222", "#ffbf00"]} blend={0.5} amplitude={1.0} speed={1} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(245,197,24,0.35),transparent_72%)]" />

                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />
            </div>

            {/* Grid Texture */}
            <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(245,197,24,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,197,24,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* Top Vignette */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent" />

            <div className=" justify-center pt-20 z-10 mx-auto flex w-full max-w-[1600px]  flex-col items-center px-4 ">
                {/* Hero Content */}
                <div className="flex w-full  flex-col items-center text-center mt-8 md:mt-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--yellow)] bg-[var(--ydim)] px-4 py-2 shadow-[0_0_30px_rgba(245,197,24,0.08)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--yellow)]">
                            Coming Soon
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-[var(--font)] text-[clamp(56px,10vw,120px)] font-bold leading-[0.9] tracking-[-0.04em] mt-2">
                        <span className="block">
                            HACKVSIT{" "}
                            <span className="inline-block rounded-xl bg-[var(--yellow)] px-4 py-1 text-[var(--black)]">
                                7.0
                            </span>
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-[820px] text-sm leading-[1.5] text-[var(--dim)] sm:text-base mt-2">
                        NORTH INDIA&apos;S BIGGEST HACKATHON. 24 HOURS. DREAM UP &amp; BUILD THE TECHNOLOGY OF TOMORROW
                        TO SOLVE THE PROBLEMS WE FACE TODAY.
                    </p>

                    {/* CTA Button */}
                    {/* <a
            href="#about"
            className="mt-10 inline-flex items-center gap-4 rounded-full bg-[var(--yellow)] px-7 py-3 text-[var(--black)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(245,197,24,0.28)]"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.24em] leading-none">
              Register Now
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 text-base">
              →
            </span>
          </a> */}
                </div>

                {/* Image Section */}
                <div className="mt-8 flex w-full justify-center sm:mt-16">
                    <div className="w-full max-w-[1200px] overflow-hidden rounded-t-2xl border border-[var(--border)] bg-[var(--panel)] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                        <div className="relative">
                            <div className="video-header">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                    }}
                                >
                                    <div className="video-dots">
                                        <div className="video-dot r"></div>
                                        <div className="video-dot y"></div>
                                        <div className="video-dot g"></div>
                                    </div>

                                    <div className="video-title-bar">HACKVSIT_6.0_HIGHLIGHTS.png</div>
                                </div>

                                <div className="data-row">
                                    <div className="dot"></div>
                                    7.0 COMING SOON
                                </div>
                            </div>
                            {/* Overlay */}
                            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_28%,rgba(0,0,0,0.38))]" />
                            <img
                                src="./heroPhoto.jpg"
                                alt="HackVSIT Team"
                                className="block h-[260px] w-full object-cover object-center sm:h-[420px] md:h-[540px] lg:h-[650px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

{
    /* CTA Button */
}
{
    /* <a
            href="#about"
            className="mt-10 inline-flex items-center gap-4 rounded-full bg-[var(--yellow)] px-7 py-3 text-[var(--black)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(245,197,24,0.28)]"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.24em] leading-none">
              Register Now
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 text-base">
              →
            </span>
          </a> */
}
