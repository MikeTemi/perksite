interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
}

export default function SectionWrapper({
    children,
    className = '',
    style,
    id,
}: SectionWrapperProps) {
    return (
        <section id={id} style={style} className={className}>
            <div className="section-wrap">
                {children}
            </div>
        </section>
    );
}