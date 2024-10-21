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

                <h3>Maples und Cosmos "Glückswurf"</h3>
                <p>Nach einer nicht ganz einfachen Geburt sind wir froh, dass die vier kleinen Racker wohl auf sind und auch Maple sich inzwischen in ihrer Rolle zurecht gefunden hat. Drei Jungs und ein Mädchen wurden geboren und wie der Zufall manchmal so spielt - alle in Red Tri. Die Natur macht eben was sie will. 😉</p>
                <p>Wir möchten euch Maples und Cosmos "Glückswurf" vorstellen:</p>
                <div className="puppies__photos">
                    <img loading="lazy" src="gfx/fortune_1.jpg" alt=""></img>
                    <img loading="lazy" src="gfx/fortune_2.jpg" alt=""></img>
                    <img loading="lazy" src="gfx/windfall_1.jpg" alt=""></img>
                    <img loading="lazy" src="gfx/windfall_2.jpg" alt=""></img>
                    <img loading="lazy" src="gfx/hope_1.jpg" alt=""></img>
                    <img loading="lazy" src="gfx/hope_2.jpg" alt=""></img>
                    <img loading="lazy" src="gfx/chance_1.jpg" alt=""></img>
                    <img loading="lazy" src="gfx/chance_2.jpg" alt=""></img>
                </div>
                <p><b>Fortune:</b> Mit 290g der Größte von allen. Er hat einen vollständigen weißen Kragen und ein wunderschönes tief dunkles braun. </p>
                <p><b>Windfall:</b> Ein kleiner Fratz in gold-brauner Jacke und minimal white. Mit 264g der Zweit-kleinste. </p>
                <p><b>Hope:</b> Das einzige Mädchen ist ein wahrer Zwerg zwischen ihren Brüdern. Zarte 140 Gramm wiegt sie, lässt sich von den Großen aber nicht von der Milchbar schieben.</p>
                <p><b>Chance:</b> Er war der Letzte der das Tageslicht erblickte und ist mit 280g der Zweitgrößte. Bei Chance haben wir den Verdacht auf eine atypische Merlezeichnung. Das wird sich aber wohl erst später eindeutig zeigen.</p>
            </div>
            {/* <div className="puppies_info__price">
                <h3>Preis</h3>
                <p>Die große Preisfrage. Viele Züchter halten sich bezüglich ihrer Preisvorstellungen gerne bedeckt, aber wir haben Verständnis dafür, dass ein Interessent wissen möchte, worauf er sich bei der Bewerbung für einen Welpen finanziell einstellen muss. Wir legen viel Wert auf Offenheit und Ehrlichkeit und erwarten das auch von den zukünftigen Besitzern unserer Welpen. Daher verfolgen wir einen anderen Ansatz und gestalten die Preise und Preisfindung transparent.</p>
                <div className="puppies_price__background">
                    <p>Dennoch ein paar Worte, die von Herzen kommen:</p>
                    <p>Tiere auszubeuten um Gewinn zu erzielen, könnte nicht weiter von unseren Zielen entfernt sein. Wir haben uns aus Leidenschaft und Überzeugung für die Zucht dieser Rasse entschieden und möchten mit unserem Zuchtprogramm dazu beitragen, einen gesunden Genpool dieser noch sehr seltenen Rasse in Deutschland und dem europäischen Ausland aufzubauen. Ich denke, bei genauerem Nachdenken ist auch jedem klar, dass die Versorgung der Zuchthunde, die genetische und medizinische Auswertung, das Futter, die tierärztlichen Untersuchungen der trächtigen Hündin und ihrer Welpen, Microchips, Impfungen, Entwurmungen, die Ausstattung usw. einen enormen Kostenfaktor ergeben, der bei einer typischen kleinen Wurfgröße von 3-4 Welpen, nur mit Glück noch gedeckt werden kann. </p>
                </div>
                <p>Die Preise für unsere Welpen liegen zwischen ca. 1.800 und 2.500 €. Ab der 5. Woche wird jeder Welpe individuell nach Erscheinungsbild und Wesensmerkmalen bewertet und der Preis wird festgelegt.</p>
                <p>Unsere Hunde sollen ihren Besitzern ihr ganzes Leben lang Freude bereiten und Familienmitglieder sein. Um sie vor unseriöser Vermehrung zu schützen, geben wir sie als reine Haustiere, ohne Zuchterlaubnis, ab.</p>
                <p>Wir behalten uns vor, in Ausnahmefällen einzelne Tiere in Zuchtqualität an kleine, ausgewählte Zuchtprogramme abzugeben.</p>
            </div> */}
        </div>
    );
}