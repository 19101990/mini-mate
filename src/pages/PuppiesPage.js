import React from 'react';
import { LiaHeartSolid } from "react-icons/lia";



export default function PuppiesPage() {
    return (
        <div className='puppies_page'>
            <h2 className="headline">Welpen</h2>
            {/* <h4 className="headline__small">Oktober 2024</h4> */}
            {/* <div className="puppies_page_wrapper">
                <div className="puppy_card">
                    <div className="puppy_image"><img loading="lazy" src="gfx/g15.jpg" alt=""></img></div>
                    <div className="puppy_description">
                        <small>The Cold Well's </small>
                        <h4 className="puppy_name">Random Name</h4>
                        <div>
                            <p>Maple war unsere erste Toy Australian Shepherd Hündin und verkörpert all das, weshalb wir uns so in diese Rasse verliebt und ihre Entwicklung mit unserem Zuchtprogramm begleiten möchten.</p>
                        </div>
                    </div>
                </div>
                <div className="puppy_card">
                    <div className="puppy_image"><img loading="lazy" src="gfx/dogs_main_2.webp" alt=""></img></div>
                    <div className="puppy_description">
                        <small>The Cold Well's </small>
                        <h4 className="puppy_name">Random Name</h4>
                        <div>
                            <p>Wir waren lange auf der Suche nach ihm: Cosmo vereint alles was wir uns in unserem zweiten Aussie gewünscht haben.</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="puppies_page__news">
                <div className="puppies_parents__wrapper">
                    <div className="puppies_parent"><img loading="lazy" src="gfx/gfx_6.webp" alt=""></img></div>
                    <div className="puppies_separator"><LiaHeartSolid /></div>
                    <div className="puppies_parent"><img loading="lazy" src="gfx/gfx_5.webp" alt=""></img></div>
                </div>
                <p>Die idyllische Umgebung rund um unseren Hof bietet den idealen Rahmen für die Aufzucht unserer Toy Australian Shepherds. Die Hunde haben hier ausreichend Platz, um sich zu entfalten, die Umwelt zu erkunden und schonend an Alltagssituationen herangeführt zu werden. Dieses natürliche Umfeld, das Aufwachsen in unserer Familie und das abwechslungsreiche Hofleben, fördert nicht nur die körperliche Gesundheit, sondern stimuliert auch die geistige Entwicklung unserer Tiere.</p>

                <h3 className="puppies__litter">Maples und Cosmos "Glückswurf"</h3>

                <div className="puppies__photos">
                    <div className="puppy__information">
                        <div className="puppies_puppy__txt">
                            <h3>Minimate's Fortune</h3>
                            <small>[Red Tri, Rüde]</small>
                            <p>Mit 290g der Größte von allen. Er hat einen vollständigen weißen Kragen und ein wunderschönes tief dunkles braun.</p>
                            <p>Fortune ist ein absoluter Kuschelbär. Er ist der Ruhigste aus dem Wurf und einfach nur ein guter Junge. Er liebt seine Menschen und möchte am liebsten überall mit dabei sein. Eher sensibel braucht er meist ein paar Sekunden um sich in einer neuen Situation wohlfühlen.</p>
                        </div>
                        <div className="puppies_puppy__img">
                            <img loading="lazy" src="gfx/fortune_1.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/fortune_3.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/fortune_4.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/fortune_5.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/fortune_6.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="puppy__information">
                        <div className="puppies_puppy__txt">
                            <h3>Minimate's Windfall</h3>
                            <small>[Red Tri, Rüde]</small>
                            <p>Ein kleiner Fratz in gold-brauner Jacke und minimal white. Mit 264g der Zweit-kleinste.</p>
                            <p> Windfall ist unser kleiner Trubelmaker. Als aufgeweckter kleiner Kerl ist er immer ganz vorne mit dabei die Welt zu entdecken und Unfug anzustellen. Fährten erschnüffeln und mit dem Schwanz unseres Hofkaters Oskar zu spielen, sind dabei seine Lieblingsbeschäftigungen.</p>
                        </div>
                        <div className="puppies_puppy__img">
                            <img loading="lazy" src="gfx/windfall_1.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/windfall_3.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/windfall_4.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/windfall_5.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/windfall_6.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="puppy__information">
                        <div className="puppies_puppy__txt">
                            <h3>Minimate's Hope</h3>
                            <small>[Red Tri, Hündin]</small>
                            <p>Das einzige Mädchen ist ein wahrer Zwerg zwischen ihren Brüdern. Zarte 140 Gramm wiegt sie, lässt sich von den Großen aber nicht von der Milchbar schieben.</p>
                            <p>Hope verdreht jedem in nullkommanichts den Kopf. Wie kann man sich auch nicht in dieses kluge kleine Köpfchen verlieben? Sie bringt definitiv von allem etwas mit: liebevoll, süß, verkuschelt und verspielt, aber auch frech und manchmal mit ihren Brüdern ein regelrechtes Biest.</p>
                        </div>
                        <div className="puppies_puppy__img">
                            <img loading="lazy" src="gfx/hope_1.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/hope_3.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/hope_4.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/hope_5.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/hope_6.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="puppy__information">
                        <div className="puppies_puppy__txt">
                            <h3>Minimate's Chance</h3>
                            <small>[Red Tri, Rüde]</small>
                            <p>Er war der Letzte der das Tageslicht erblickte und ist mit 280g der Zweitgrößte. Bei Chance haben wir den Verdacht auf eine atypische Merlezeichnung. Das wird sich aber wohl erst später eindeutig zeigen.</p>
                            <p>Chance aka Prinz Charming! Gelocktes Haar und strahlend blaue Augen, ein kleiner Allrounder mit großem Herz. Er ist für jeden Spaß zu haben, lässt sich für alles begeistern, treibt all zu gerne Schabernack, aber liebt es auch zu kuscheln und seinen Menschen haufenweise küsschen zu geben.</p>
                        </div>
                        <div className="puppies_puppy__img">
                            <img loading="lazy" src="gfx/chance_1.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/chance_3.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/chance_4.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/chance_5.jpg" alt=""></img>
                            <img loading="lazy" src="gfx/chance_6.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}