// BadgeEmbed.jsx
import { useEffect, useRef } from "react";

export default function BadgeEmbed({
    shareBadgeId = "02f45cb5-9381-42cc-ae7b-7fa580db3b3f",
    width = "auto",
    height = 270,
    host = "https://www.credly.com",
}) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Avoid adding the script multiple times
        const SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";
        const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);

        const loadScript = () =>
            new Promise((resolve) => {
                if (existing) return resolve();
                const s = document.createElement("script");
                s.src = SCRIPT_SRC;
                s.async = true;
                s.onload = resolve;
                document.body.appendChild(s);
            });

        loadScript().then(() => {
            // Credly’s embed.js reads data attributes on this div
            // It auto-renders the iframe once the script is loaded
        });
    }, []);

    return (
        <div
            ref={containerRef}
            data-iframe-width={String(width)}
            data-iframe-height={String(height)}
            data-share-badge-id={shareBadgeId}
            data-share-badge-host={host}
            style={{ minWidth: width, minHeight: height, backgroundColor: 'red' }}
        />
    );
}