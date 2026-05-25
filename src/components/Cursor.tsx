import { useState } from "react";
import { useCursor, type CursorOptions } from "../hooks/useCursor";
import cursorImage from "../assets/cursor.png";

interface CustomCursorProps extends CursorOptions {
    className?: string;
}

export function CustomCursor({ className, ...options }: CustomCursorProps) {
    const { cursorRef, width, height } = useCursor(options);
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
                src={cursorImage}
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
