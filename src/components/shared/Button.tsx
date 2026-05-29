import Link from 'next/link';

interface ButtonProps {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function Button({
    label,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
}: ButtonProps) {
    const classes = `btn btn-${size} btn-${variant} ${variant === 'ghost' ? 'btn-ghost-white' : ''} ${className}`.trim();

    if (href) {
        return <Link href={href} className={classes}>{label}</Link>;
    }

    return (
        <button onClick={onClick} className={classes}>
            {label}
        </button>
    );
}