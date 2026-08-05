'use client';

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';

const links = [
    { label: 'Home', href: '/' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
            height: '64px',
            background: 'rgba(245, 245, 243, 0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/perk-blue.png" alt="Perk+" style={{ height: '28px' }} />
            </Link>

            {/* Desktop links */}
            <ul style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
            }} className="nav-desktop">
                {links.map(link => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="nav-link"
                            style={{
                                fontSize: '16px',
                                fontWeight: pathname === link.href ? 700 : 500,
                                color: pathname === link.href ? 'var(--navy)' : 'rgba(0,0,0,0.55)',
                                transition: 'color 0.15s',
                            }}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <a href="https://dashboard.perkplus.com.au/register" className="btn btn-sm btn-primary nav-desktop">
                Start free
            </a>

            {/* Hamburger */}
            <button
                onClick={() => setOpen(!open)}
                className="nav-ham-btn"
                aria-label="Toggle menu"
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--navy)',
                    padding: '4px',
                }}
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile Menu */}
            {open && (
                <div style={{
                    position: "fixed",
                    top: '64px',
                    left: 0,
                    right: 0,
                    background: '#f5f5f3',
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    padding: '24px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    {links.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            style={{
                                fontSize: '18px',
                                fontWeight: pathname === link.href ? 700 : 500,
                                color: pathname === link.href ? 'var(--navy)' : 'rgba(0,0,0,0.7)',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://dashboard.perkplus.com.au/register"
                        className="btn btn-md btn-primary"
                        onClick={() => setOpen(false)}
                        style={{ alignSelf: 'flex-start', marginTop: '8px' }}
                    >
                        Start free
                    </a>
                </div>
            )}
        </nav>
    )
}