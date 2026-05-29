'use client';

import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
    children: React.ReactNode;
    delay?: 0 | 1 | 2 | 3;
    className?: string;
}

export default function RevealOnScroll({
    children,
    delay = 0,
    className = '',
}: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('in');
                    obs.unobserve(el);
                }
            },
            { threshold: 0.08 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const delayClass = delay > 0 ? `rd${delay}` : '';

    return (
        <div ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
            {children}
        </div>
    );
}