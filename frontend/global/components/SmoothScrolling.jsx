"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export function SmoothScrolling({ children }) {
    const lenisOptions = {
        lerp: 0.08,
        duration: 1.2,
        smoothTouch: true,
        smooth: true,
    };

    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    );
}
