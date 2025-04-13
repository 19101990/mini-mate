import React from 'react';

export default function Dogs() {
    return (
        <div className="dogs">
            <h2 className="headline">Unsere Minimates</h2>
            <div className="dogs_wrapper">

                <div className="dog">
                    <div className="dog_img__wrapper">
                        <img className="dog_img" loading="lazy" src="gfx/gfx_10.webp" alt="">
                        </img>
                        <div className="dog_name">Maple</div>
                    </div>

                    <div className="dog_description">Maple war unsere erste Toy Australian Shepherd Hündin und verkörpert all das, weshalb wir uns so in diese Rasse verliebt haben und ihre Entwicklung mit unserem Zuchtprogramm begleiten möchten. Sie stammt aus einer renommierten Showlinie aus den USA und hat einige herausragende Elite Champions in ihrem Pedigree. </div>
                </div>

                <div className="dog">
                    <div className="dog_img__wrapper">
                        <img className="dog_img" loading="lazy" src="gfx/gfx_14.webp" alt="">
                        </img>
                        <div className="dog_name">Cosmo</div>
                    </div>
                    <div className="dog_description">Cosmo haben wir aus Texas zu uns geholt. Er stammt aus einer sehr erfolgreichen Zuchtlinie für kleine Toy Australian Shepherds und wir sind sehr dankbar, dass wir ihn in unser Zuchtprogramm aufnehmen durften. Ein vielversprechender kleiner Charmeur – stets gut gelaunt und immer auf der Suche nach Blödsinn.</div>
                </div>

                <div className="dog">
                    <div className="dog_img__wrapper">
                        <img className="dog_img" loading="lazy" src="gfx/bodhi_1.jpg" alt="">
                        </img>
                        <div className="dog_name">Bodhi</div>
                    </div>
                    <div className="dog_description">Minimates Bodhi Bear, unser selbstgezogener Herzensbrecher mit den eisblauen Augen lebt im Raum Magdeburg und darf dort bei einer liebevollen Familie erwachsen werden und die Welt entdecken. Er hat ein moderates bis niedriges Energielevel und ist sehr Menschenbezogen.</div>
                </div>

                <div className="dog">
                    <div className="dog_img__wrapper">
                        <img className="dog_img" loading="lazy" src="gfx/chewie_1.jpg" alt="">
                        </img>
                        <div className="dog_name">Chewie</div>
                    </div>
                    <div className="dog_description">Minimates Chewbacca wächst in Ostfriesland auf und ist stets bereit für neue Abenteuer. Chewie ist ein aufgeschlossener junger Rüde, der keine Fremden kennt. Er liebt es Neues zu entdecken und mit seiner Familie Ausflüge zu unternehmen.</div>
                </div>

            </div>
        </div>
    );
}