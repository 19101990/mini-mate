import React from 'react';


export default function DogsPage() {
  return (
    <div className='dogs_page'>
        <h2 className="headline">Unsere MiniMates</h2>
        <div className="dogs_page_wrapper">
            <div className="dog_card">
                <div className="dog_image"><img src="mini-mate/gfx/g7.jpg"></img></div>
                <div className="dog_description">
                    <h4 className="dog_name">Cross L’s Foggy Maple Forest</h4>
                    <small>(USA Import)</small>
                    <div>
                        <ul>
                            <li>Energielevel: <b>Niedrig</b></li>
                            <li>Hüteinstinkt: <b>Moderat</b></li>
                            <li>Farbe: <b>Red Merle</b></li>
                            <li>Augen: <b>Blau/Blau</b></li>
                            <li>Größe:</li>
                            <li>Gewicht: <b>7 kg</b></li>
                            <li>Gentests: <b>frei - MDR1, CLN6, HUU, AMN, CND, CD, HSF4, CMR1, CEA, PRA + PRCD, SOD1</b></li>
                            <li>Hüfte:</li>
                            <li>Ellenbogen:</li>
                        </ul>
                    </div>
                    <div>
                        <p>Maple war unsere erste Toy Australian Shepherd Hündin und verkörpert all das, weshalb wir uns so in diese Rasse verliebt und ihre Entwicklung mit unserem Zuchtprogramm begleiten möchten.</p>
                        <p>Sie stammt aus einer renomierten Showlinie aus den USA und hat einige herausragende Elite Champion in ihrem Pedigree. </p>
                        <p>Maple ist eine sehr liebevolle und sanftmütige Hündin mit einem stark ausgeprägten Will-to-please. Rassetypisch ist sie Fremden gegenüber verhalten, geht mit ihrem Menschen jedoch eine sehr enge Bindung ein. </p>
                    </div>
                </div>
            </div>
            <div className="dog_card">
                <div className="dog_image"><img src="mini-mate/gfx/g5.jpg"></img></div>
                <div className="dog_description">
                    <h4 className="dog_name">Enloe‘s Cosmic Eclipse</h4>
                    <small>(USA Import)</small>
                    <div>
                        <ul>
                            <li>Energielevel: <b>Moderat</b></li>
                            <li>Hüteinstinkt: <b>Niedrig</b></li>
                            <li>Farbe: <b>Black Tri</b></li>
                            <li>Augen: <b>Braun/Braun</b></li>
                            <li>Größe:</li>
                            <li>Gewicht:</li>
                            <li>Gentests: <b>frei - MDR1, CLN6, HUU, AMN, CDDY IVDD, CMO, CD, CMR1, CEA, PRA + PRCD, SOD1 DM</b></li>
                            <li>Hüfte:</li>
                            <li>Ellenbogen:</li>
                        </ul>
                    </div>
                    <div>
                        <p>Wir waren lange auf der Suche nach ihm: Cosmo vereint alles was wir uns in unserem zweiten Aussie gewünscht haben.</p>
                        <p>Als Nachfahre des mehrfachen Champions Dragon Slayer, bringt er nicht nur den Körperbau eines Standard Australian Shepherds mit, sondern auch das bemerkenswerte Haarkleid. Er ist red-factored und stammt aus einer starken BET-Linie (Blue Eyed Tri). Seine liebenswerten braunen Augen machen ihn jedoch nur noch schöner.</p>
                        <p>Cosmo ist ein unheimlich freundlicher und verspielter Rüde, der stets gut gelaunt auf der Suche nach Schabernack ist. Trotz einer guten Portion Arbeitswille und Motivation mit seinem Besitzer zu arbeiten, hat er eine sehr sanfte und sensible Seite.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}