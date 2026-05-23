import { useEffect, useRef, useState } from "react";

interface CursorOptions {
    imageUrl: string;

    width?: number;

    height?: number;

    hotspot?: [number, number];

    hideNativeCursor?: boolean;

    smoothing?: number;
}

/**
 * useCursor
 *
 * Returns a ref to attach to the cursor <div> you render.
 * The hook drives position updates via rAF — no re-renders after mount.
 *
 * Usage:
 *   const cursorRef = useCursor({ imageUrl: "/cursor.png" });
 *   return <div ref={cursorRef} />;
 */
export function useCursor({
    imageUrl,
    width = 32,
    height = 32,
    hotspot = [0, 0],
    hideNativeCursor = true,
    smoothing = 0.12,
}: CursorOptions) {
    const cursorRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: -200, y: -200 });
    const pos = useRef({ x: -200, y: -200 });
    const rafId = useRef<number>(0);

    useEffect(() => {
        const el = cursorRef.current;
        if (!el) return;

        const offsetX = hotspot[0];
        const offsetY = hotspot[1];

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const loop = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * smoothing;
            pos.current.y += (mouse.current.y - pos.current.y) * smoothing;

            el.style.transform = `translate(${pos.current.x - offsetX}px, ${pos.current.y - offsetY}px)`;

            rafId.current = requestAnimationFrame(loop);
        };

        rafId.current = requestAnimationFrame(loop);
        window.addEventListener("mousemove", onMouseMove, { passive: true });

        if (hideNativeCursor) {
            document.documentElement.style.cursor = "none";
        }

        return () => {
            cancelAnimationFrame(rafId.current);
            window.removeEventListener("mousemove", onMouseMove);
            if (hideNativeCursor) {
                document.documentElement.style.cursor = "";
            }
        };
    }, [smoothing, hotspot, hideNativeCursor]);

    return { cursorRef, width, height, imageUrl };
}

interface CustomCursorProps extends CursorOptions {
    className?: string;
}

export function CustomCursor({ className, ...options }: CustomCursorProps) {
    const { cursorRef, width, height, imageUrl } = useCursor(options);
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            ref={cursorRef}
            aria-hidden="true"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width,
                height,
                pointerEvents: "none",
                zIndex: 99999,
                willChange: "transform",
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.2s",
            }}
            className={className}
        >
            <img
                src={imageUrl}
                alt=""
                width={width}
                height={height}
                draggable={false}
                onLoad={() => setLoaded(true)}
                style={{ display: "block", width: "100%", height: "100%" }}
            />
        </div>
    );
}
