import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const allowedOrigins = ["https://hack-vsit.tech", "https://www.hack-vsit.tech"];

    const origin = req.headers.origin;

    if (!origin || !allowedOrigins.includes(origin)) {
        return res.status(403).json({
            success: false,
            error: "Forbidden origin",
        });
    }

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            error: "Method not allowed",
        });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!webhookUrl || !web3formsKey) {
        return res.status(500).json({
            success: false,
            error: "Missing environment variables",
        });
    }

    try {
        const { name, email, website, partnership_type, message } = req.body;

        const discordPromise = fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: "🤝 New Partnership Inquiry",
                        color: 0xfacc15,
                        fields: [
                            {
                                name: "Name",
                                value: name || "N/A",
                            },
                            {
                                name: "Email",
                                value: email || "N/A",
                            },
                            {
                                name: "Website",
                                value: website || "N/A",
                            },
                            {
                                name: "Partnership Type",
                                value: partnership_type || "N/A",
                            },
                            {
                                name: "Message",
                                value: message || "N/A",
                            },
                        ],
                        timestamp: new Date().toISOString(),
                    },
                ],
            }),
        });

        const web3formsPromise = fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_key: web3formsKey,
                subject: "New HackVSIT Partnership Inquiry",
                from_name: "HackVSIT Website",
                name,
                email,
                website,
                partnership_type,
                message,
            }),
        });

        const [discordResult, web3formsResult] = await Promise.allSettled([discordPromise, web3formsPromise]);

        const discordSuccess = discordResult.status === "fulfilled" && discordResult.value.ok;

        const web3formsSuccess = web3formsResult.status === "fulfilled" && web3formsResult.value.ok;

        if (discordSuccess || web3formsSuccess) {
            return res.status(200).json({
                success: true,
                discordSuccess,
                web3formsSuccess,
            });
        }

        return res.status(500).json({
            success: false,
            error: "Both services failed",
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
}
