import type { Metadata } from "next";
import WeddingLanding from "./WeddingLanding";

export const metadata: Metadata = {
    title: "Vinh & Linh | Wedding Celebration",
    description:
        "A refined digital wedding celebration for Vinh and Linh.",
    openGraph: {
        title: "Vinh & Linh Wedding Celebration",
        description:
            "Join Vinh and Linh as they begin their forever.",
        type: "website",
        images: ["/premium-wedding/opengraph-image"],
    },
};

export default function PremiumWeddingPage() {
    return <WeddingLanding />;
}
