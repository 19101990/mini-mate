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

            </div>
        </div>
    );
}