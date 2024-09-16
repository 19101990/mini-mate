import React from 'react';


export default function DogsPage() {
    return (
        <div className='dogs_page'>
            <h2 className="headline">Unsere Minimates</h2>
            <div className="dogs_page_wrapper">
                <div className="dog_card__wrapper">
                    <div class="dog_card">
                        <div className="dog_image"><img loading="lazy" src="gfx/maple.webp" alt=""></img></div>
                        <div className="dog_description">
                            <h4 className="dog_name">Cross L’s Foggy Maple Forest</h4>
                            <small>(USA Import)</small>
                            <div>
                                <ul>
                                    <li>Energielevel: <b>Niedrig</b></li>
                                    <li>Hüteinstinkt: <b>Moderat</b></li>
                                    <li>Farbe: <b>Red Merle</b></li>
                                    <li>Augen: <b>Blau/Blau</b></li>
                                    <li>Größe: <b>31,5 cm</b></li>
                                    <li>Gewicht: <b>7 kg</b></li>
                                    <li>Gentests: <b>full panel clear by parentage, NAD negativ</b></li>
                                    <li>M Lokus: <b>M(267)/m</b></li>
                                </ul>
                            </div>
                            <div>
                                <p>Maple war unsere erste Toy Australian Shepherd Hündin und verkörpert all das, weshalb wir uns so in diese Rasse verliebt und ihre Entwicklung mit unserem Zuchtprogramm begleiten möchten.</p>
                                <p>Sie stammt aus einer renommierten Showlinie aus den USA und hat einige herausragende Elite Champion in ihrem Pedigree. </p>
                                <p>Maple ist eine sehr liebevolle und sanftmütige Hündin mit einem stark ausgeprägten „will to please“. Rassetypisch ist sie Fremden gegenüber verhalten, geht mit ihrem Menschen jedoch eine sehr enge Bindung ein. </p>
                            </div>
                        </div>
                    </div>
                    <div class="dog_card__tree">
                        <img loading="lazy" class="tree_desktop" src="gfx/tree_maple.png" alt=""></img>
                        <img loading="lazy" class="tree_mobile" src="gfx/tree_maple_mobile.png" alt=""></img>
                    </div>
                </div>
                <div className="dog_card__wrapper">
                    <div class="dog_card">
                        <div className="dog_image"><img loading="lazy" src="gfx/cosmo.webp" alt=""></img></div>
                        <div className="dog_description">
                            <h4 className="dog_name">Enloe‘s Cosmic Eclipse</h4>
                            <small>(USA Import)</small>
                            <div>
                                <ul>
                                    <li>Energielevel: <b>Moderat</b></li>
                                    <li>Hüteinstinkt: <b>Niedrig</b></li>
                                    <li>Farbe: <b>Black Tri</b></li>
                                    <li>Augen: <b>Braun/Braun</b></li>
                                    <li>Größe: <b>32 cm</b></li>
                                    <li>Gewicht: <b>5 kg</b></li>
                                    <li>Gentests: <b>full panel clear by parentage, NAD negativ</b></li>
                                    <li>M Lokus: <b>Mc(222)/m</b></li>
                                    <li>(Cosmo steht ab 2025 einer kleinen Anzahl ausgewählter Hündinnen als Deckrüde zur Verfügung.)</li>
                                </ul>
                            </div>
                            <div>
                                <p>Wir waren lange auf der Suche nach ihm: Cosmo vereint alles was wir uns in unserem zweiten Aussie gewünscht haben.</p>
                                <p>Als Nachfahre des mehrfachen Champions Dragon Slayer, bringt er nicht nur den Körperbau eines Standard Australian Shepherds mit, sondern auch das bemerkenswerte Haarkleid. Er ist red-factored, und stammt aus einer starken BET-Linie (Blue Eyed Tri). Seine liebenswerten braunen Augen machen ihn jedoch nur noch schöner.</p>
                                <p>Cosmo ist ein unheimlich freundlicher und verspielter Rüde, der stets gut gelaunt auf der Suche nach Schabernack ist. Trotz einer guten Portion Arbeitswille und Motivation mit seinem Besitzer zu arbeiten, hat er eine sehr sanfte und sensible Seite.</p>
                            </div>
                        </div>
                    </div>
                    <div class="dog_card__tree">
                        <img loading="lazy" class="tree_desktop" src="gfx/tree_cosmo.png" alt=""></img>
                        <img loading="lazy" class="tree_mobile" src="gfx/tree_cosmo_mobile.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
}