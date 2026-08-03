
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

export const metadata = {
    title: 'Contact Us, Perk+',
    description: 'Get in touch with the Perk+ team. We are here to help local businesses grow.',
};

export default function ContactPage() {
    return (
        <main style={{ background: 'var(--navy)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            <div style={{ flex: 1, padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
                
                {/* Background decorative elements */}
                <div style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(95,255,159,0.08) 0%, transparent 60%)',
                    top: '-100px',
                    right: '-200px',
                    pointerEvents: 'none',
                }} />

                <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
                            <span className="eyebrow eyebrow-dark eyebrow-sym">Get in Touch</span>
                            <h1 className="h1 h1-light" style={{ margin: '16px 0 20px' }}>
                                We're here to help you <em>grow.</em>
                            </h1>
                            <p className="lede lede-light" style={{ margin: '0 auto' }}>
                                Got a question about Perk+, or have some feedback for us? 
                                Drop us a line and our team will get back to you shortly.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: '64px',
                        alignItems: 'start',
                    }} className="contact-grid">
                        
                        {/* Left column: Form */}
                        <RevealOnScroll delay={1}>
                            <ContactForm />
                        </RevealOnScroll>

                        {/* Right column: Info */}
                        <RevealOnScroll delay={2}>
                            <ContactInfo />
                        </RevealOnScroll>

                    </div>
                </div>
            </div>

        </main>
    );
}
