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
                <p>Wir erwarten Welpen im Oktober!</p>
                <div className="puppies_parents__wrapper">
                    <div className="puppies_parent"><img loading="lazy" src="gfx/gfx_6.webp" alt=""></img></div>
                    <div className="puppies_separator"><LiaHeartSolid /></div>
                    <div className="puppies_parent"><img loading="lazy" src="gfx/gfx_5.webp" alt=""></img></div>
                </div>
            </div>
            <div className="puppies_info__price">
                <h3>Preis</h3>
                <p>Die große Preisfrage. Wir haben Verständnis dafür, dass ein Interessent wissen möchte, worauf er sich bei der Bewerbung für einen Welpen finanziell einstellen muss. Wir haben oft erlebt, dass Interessenten nicht den Eindruck erwecken möchten, dass das Geld im Vordergrund steht. Der Züchter wiederum möchte keinen Interessenten und potentiell liebevolles Zuhause für einen Welpen verlieren, bevor diese sich von dem Zuchtprogramm einen unvoreingenommenen Eindruck verschaffen konnten. Beide Seiten sind nachvollziehbar, doch weder dem Züchter, noch dem Interessenten ist damit geholfen um diese Frage herumzutanzen.</p>
                <p>Wir legen viel Wert auf Offenheit und Ehrlichkeit und erwarten das auch von den zukünftigen Besitzern unserer Welpen, daher verfolgen wir einen anderen Ansatz und gestalten die Preise und Preisfindung transparent.</p>
                <div className="puppies_price__background">
                    <p>Dennoch ein paar Worte, die von Herzen kommen:</p>
                    <p>Tiere auszubeuten um Gewinn zu erzielen, könnte nicht weiter von unseren Zielen entfernt sein. Wir haben uns aus Leidenschaft und Überzeugung für die Zucht dieser Rasse entschieden und möchten mit unserem Zuchtprogramm dazu beitragen einen gesunden Genpool dieser noch sehr seltenen Rasse in Deutschland und dem europäischen Ausland aufzubauen. Ich denke bei genauerem Nachdenken ist auch jedem klar, dass die Versorgung der Zuchthunde, die genetische und medizinische Auswertung, das Futter, die tierärztlichen Untersuchungen der trächtigen Hündin und ihrer Welpen, Microchips, Impfungen, Entwurmungen, die Ausstattung usw. einen enormen Kostenfaktor ergeben, der bei einer typisch kleinen Wurfgröße von 3-4 Welpen, nur mit Glück noch gedeckt werden kann. Die Tage und Nächte, die wir uns um die neugeborenen Welpen sorgen und die Zeit, die wir in die liebevolle Aufzucht und Sozialisierung der Welpen stecken, finden in der Preisfindung schon gar keine Beachtung mehr.</p>
                </div>
                <p>Die Preise für unsere Welpen liegen zwischen ca. 1.800 und 2.500 €. Ab der 5. Woche wird jeder Welpe individuell nach Erscheinungsbild und Wesensmerkmalen bewertet und der Preis festgelegt.</p>
                <p>Unsere Hunde sollen ihren Besitzern ihr ganzes Leben lang Freude bereiten und Familienmitglieder sein. Um sie vor unseriöser Vermehrung zu schützen, geben wir sie als reine Haustiere, ohne Zuchterlaubnis, ab. </p>
                <p>Wir behalten uns vor in Ausnahmefällen einzelne Tiere in Zuchtqualität an kleine ausgewählte Zuchtprogramme abzugeben. </p>
            </div>
        </div>
    );
}