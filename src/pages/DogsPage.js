import React from 'react';


export default function DogsPage() {
    return (
        <div className='dogs_page'>
            <h2 className="headline">Unsere Minimates</h2>
            <div className="dogs_page_wrapper">
                <div className="dog_card__wrapper">
                    <div class="dog_card">
                        <div className="dog_image"><img src="gfx/maple_uh.jpg" alt=""></img></div>
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
                                    <li>Gentests: <b>Frei von allen rassetypischen Erbkrankheiten, inklusive NAD</b></li>
                                    <li>M Lokus: <b>M(267)/m</b></li>
                                    <li>DOK: <b>frei (Dez 24)</b></li>
                                    <li>HD/ED/OCD: <b>folgt</b></li>
                                </ul>
                            </div>
                            <div>
                                <p>Maple ist unser kleiner Schatten. Sie ist eine sehr liebevolle und sanftmütige Hündin, die es liebt, Zeit mit ihren Menschen zu verbringen. Mit einem stark ausgeprägten „Will to please“ ausgestattet, ist sie die perfekte Partnerin für uns.</p>
                                <p>Sie bringt diese hervorragenden Wesensmerkmale, einen kräftigen Körperbau, markanten Kopf und eisblaue Augen mit in unser Zuchtprogramm. Die Champions in ihrem Pedigree sprechen für sich.</p>
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
                        <div className="dog_image"><img src="gfx/cosmo_uh.jpg" alt=""></img></div>
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
                                    <li>Gentests: <b>Frei von allen rassetypischen Erbkrankheiten, inklusive NAD</b></li>
                                    <li>M Lokus: <b>Mc(222)/m</b></li>
                                    <li>DOK: <b>frei (Dez 24)</b></li>
                                    <li>HD: <b>folgt</b></li>
                                    <li>ED: <b>0</b></li>
                                    <li>OCD: <b>frei</b></li>
                                    <li>Cosmo steht ab 2025 einer kleinen Anzahl ausgewählter Hündinnen als Deckrüde zur Verfügung.</li>
                                </ul>
                            </div>
                            <div>
                                <p>Wir waren lange auf der Suche nach ihm: Cosmo vereint alles, was wir uns in unserem zweiten Aussie gewünscht haben.</p>
                                <p>Als Nachfahre des mehrfachen Champions Dragon Slayer, bringt er im Kleinformat nicht nur den Körperbau eines Standard Australian Shepherds mit, sondern auch das bemerkenswerte Haarkleid. Er ist red-factored und stammt aus einer starken BET-Linie (Blue Eyed Tri). Seine liebenswerten braunen Augen machen ihn jedoch nur noch schöner.</p>
                                <p>Cosmo ist ein unheimlich freundlicher und verspielter Rüde, der stets gut gelaunt auf der Suche nach Schabernack ist. Trotz einer guten Portion Arbeitswillen und Motivation, mit seinem Besitzer zu arbeiten, hat er eine sehr sanfte und sensible Seite.</p>
                            </div>
                        </div>
                    </div>
                    <div class="dog_card__tree">
                        <img loading="lazy" class="tree_desktop" src="gfx/tree_cosmo.png" alt=""></img>
                        <img loading="lazy" class="tree_mobile" src="gfx/tree_cosmo_mobile.png" alt=""></img>
                    </div>
                </div>
                <div className="dog_card__full">
                    <h4 className="dog_name">Bodhi und Chewie</h4>
                    <div className="dog_card__full_img">
                        <img src="gfx/bodhi_1.jpg" alt=""></img>
                        <img src="gfx/chewie_1.jpg" alt=""></img>
                    </div>
                        
                    <div>
                        <p>Die Wurfgeschwister Bodhi und Chewie sind zwei selbstgezogene Jungs, die wir in ihrem ersten Lebensjahr weiterhin beobachten und begleiten dürfen. Wenn sich die zwei weiter so vielversprechend entwickeln, darf einer von Ihnen nach einer gesundheitlich Auswertung zukünftig unsere Zucht unterstützen.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}