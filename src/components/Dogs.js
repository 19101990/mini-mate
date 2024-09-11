import React from 'react';

export default function Dogs() {
    return (
        <div className="dogs">
            <h2 className="headline">Unsere Minimates</h2>
            <div className="dogs_wrapper">

                <div className="dog">
                    <img className="dog_img" loading="lazy" src="gfx/g17.jpg" alt="">
                    </img>
                    <div className="dog_name">Maple</div>
                    <div className="dog_description">Maple war unsere erste Toy Australian Shepherd Hündin und verkörpert all das, weshalb wir uns so in diese Rasse verliebt und ihre Entwicklung mit unserem Zuchtprogramm begleiten möchten. Sie stammt aus einer renomierten Showlinie aus den USA und hat einige herausragende Elite Champion in ihrem Pedigree.</div>
                </div>

                <div className="dog">
                    <img className="dog_img" loading="lazy" src="gfx/g19.webp" alt="">
                    </img>
                    <div className="dog_name">Cosmo</div>
                    <div className="dog_description">Als Nachfahre des mehrfachen Champions Dragon Slayer, bringt er nicht nur den Körperbau eines Standard Australian Shepherds mit, sondern auch das bemerkenswerte Haarkleid. Er ist red-factored und stammt aus einer starken BET-Linie (Blue Eyed Tri). Seine liebenswerten braunen Augen machen ihn jedoch nur noch schöner.</div>
                </div>

            </div>
        </div>
    );
}