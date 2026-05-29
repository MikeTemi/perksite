export default function BrandsTicker() {
    const brands = [
        'Maple St. Coffee',
        "Fisherman's Daughter",
        'Royal Fades',
        'Coco Hairdressers',
        'Brisbane Pub',
        'Melos Cafe',
    ];

    return (
        <section style={{
            background: '#061824',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '32px 40px',
        }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
            }}>
                <p style={{
                    fontSize: '13px',
                    color: 'var(--green)',
                    marginBottom: '20px',
                    fontWeight: 500,
                }}>
                    Already running on{' '}
                    <strong>local counters around Brisbane</strong>{' '}
                    — cafés, barbers, bakeries, pubs.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '0',
                    flexWrap: 'wrap',
                }}>
                    {brands.map((brand, i) => (
                        <span key={i} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '4px 32px 4px 0',
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'var(--green)',
                            whiteSpace: 'nowrap',
                        }}>
                            <span style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: '50%',
                                background: 'var(--green)',
                                display: 'inline-block',
                                flexShrink: 0,
                            }} />
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}