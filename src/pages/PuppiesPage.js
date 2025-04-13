import React from 'react';
import { LiaHeartSolid } from "react-icons/lia";



export default function PuppiesPage() {
    return (
        <div className='puppies_page'>
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