'use client'

export default function BrandsTicker() {
    const brands = [
        "Fisherman's Daughter",
        'Royal Fades',
    ];

    /* const extraBrands = [
        "Maple St. Coffee",
        'Coco Hairdressers',
        'Brisbane Pub',
        'Melos Cafe',
    ]; */

    // Combine to match the HTML order exactly:
    const displayBrands = [
        brands[0],       // Fisherman's Daughter
        brands[1],       // Royal Fades
    ];

    return (
        <section className="brands">
            <div className="brands-inner">
                <p className="brands-label">
                    Already running on <strong>local counters around Brisbane</strong> — cafés, barbers, bakeries, pubs.
                </p>

                <div className="brands-row">
                    {displayBrands.map((brand, i) => (
                        <span key={i} className="brand-chip">
                            <span className="dot"></span>
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}