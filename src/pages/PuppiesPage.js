import React from 'react';

export default function PuppiesPage() {
    const puppiesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Unsere Welpen",
        "description": "Gesunde Toy Australian Shepherd Welpen aus unserer kleinen Hobbyzucht",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Animal",
                    "name": "Maples und Cosmos 'Glückswurf'",
                    "breed": "Toy Australian Shepherd",
                    "birthDate": "2024-10",
                    "offspring": [
                        {
                            "@type": "Animal",
                            "name": "Fortune",
                            "image": "gfx/fortune_7.jpg",
                            "description": "Ein Welpe aus unserem Glückswurf"
                        },
                        {
                            "@type": "Animal",
                            "name": "Windfall",
                            "image": "gfx/windfall_7.jpg",
                            "description": "Ein Welpe aus unserem Glückswurf"
                        },
                        {
                            "@type": "Animal",
                            "name": "Chance",
                            "image": "gfx/chance_7.jpg",
                            "description": "Ein Welpe aus unserem Glückswurf"
                        },
                        {
                            "@type": "Animal",
                            "name": "Hope",
                            "image": "gfx/hope_7.jpg",
                            "description": "Ein Welpe aus unserem Glückswurf"
                        }
                    ]
                }
            }
        ],
        "nextLitter": {
            "@type": "Event",
            "name": "Herbst/Winter 2025 Wurf",
            "startDate": "2025-09",
            "endDate": "2025-12",
            "description": "Unser nächster geplanter Wurf Toy Australian Shepherd Welpen"
        }
    };

    return (
        <div className='puppies_page'>
            <script type="application/ld+json">
                {JSON.stringify(puppiesSchema)}
            </script>
            <h2 className="headline">Welpen</h2>
            <div className="puppies_page__news">
                <div className="puppies_page__news_wrapper">
                    <h3 className="puppies__litter" style={{marginBottom: '10px', fontWeight: '400'}}>Wir planen unseren nächsten Wurf im Herbst/Winter 2025.</h3>
                </div>
                
                <h3 className="puppies__litter" style={{marginBottom: '10px'}}>Maples und Cosmos "Glückswurf"</h3>
                <h4 style={{textAlign: 'center', marginTop: '0px', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase'}}>Oktober 2024</h4>
                <div className="puppies__info">
                    <div className="puppies__info_img_wrapper" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px'}}>
                        <img loading="lazy" src="gfx/fortune_7.jpg" alt=""></img>
                        <img loading="lazy" src="gfx/windfall_7.jpg" alt=""></img>
                        <img loading="lazy" src="gfx/chance_7.jpg" alt=""></img>
                        <img loading="lazy" src="gfx/hope_7.jpg" alt=""></img>
                    </div>
                    
                    <p>Alle Welpen haben ein tolles Zuhause gefunden!</p>
                </div>
            </div>

        </div>
    );
}