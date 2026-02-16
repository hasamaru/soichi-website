"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const FadeUp: React.FC<FadeUpProps> = ({ children, delay = 0, className = "" }) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay,
            }
        );
    }, [delay]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

export default FadeUp;
