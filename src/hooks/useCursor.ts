import { useEffect, useRef } from "react";

export interface CursorOptions {
    imageUrl: string;
    width?: number;
    height?: number;
    hotspot?: [number, number];
    hideNativeCursor?: boolean;
    smoothing?: number;
}

export function useCursor({
    width = 32,
    height = 32,
    hotspot = [0, 0],
    hideNativeCursor = true,
    smoothing = 0.12,
}: CursorOptions) {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = cursorRef.current;
        if (!el) return;

        const offsetX = hotspot[0];
        const offsetY = hotspot[1];

        const onMouseMove = (e: MouseEvent) => {
            el.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });

        if (hideNativeCursor) {
            document.documentElement.style.cursor = "none";
        }

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            if (hideNativeCursor) {
                document.documentElement.style.cursor = "";
            }
        };
    }, [smoothing, hotspot, hideNativeCursor]);

    return { cursorRef, width, height };
}
