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

    if (!webhookUrl) {
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

        const [discordResult] = await Promise.allSettled([discordPromise]);

        const discordSuccess = discordResult.status === "fulfilled" && discordResult.value.ok;

        if (discordSuccess) {
            return res.status(200).json({
                success: true,
                discordSuccess,
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
