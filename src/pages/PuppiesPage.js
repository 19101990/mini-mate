import React from 'react';


export default function PuppiesPage() {
    return (
        <div className='puppies_page'>
            <h2 className="headline">Puppies</h2>
            <h4 className="headline__small">Oktober 2024</h4>
            <div className="puppies_page_wrapper">
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
            </div>
            <div className="puppies_info__price">
                <h3>Preis</h3>
                <p>Die große Preisfrage. Ich habe Verständnis dafür, dass ein Interessent wissen möchte, worauf er sich bei einer Bewerbung für einen Welpen finanziell einstellen muss. Ich habe oft erlebt, dass Interessenten nicht den Eindruck erwecken wollen, dass ihnen das Geld wichtiger ist als das Tier. Der Züchter wiederum möchte keine potenziellen Hundeliebhaber verprellen, bevor diese sich von dem Zuchtprogramm einen unvoreingenommenen Eindruck verschaffen konnten. Beide Seiten sind nachvollziehbar, doch weder dem Züchter, noch dem Interessenten ist damit geholfen um diese Frage herumzutanzen.</p>
                <p>Ich lege viel Wert auf Offenheit und Ehrlichkeit und erwarte das auch von den zukünftigen Besitzern unserer Welpen, daher verfolge ich einen anderen Ansatz und gestalte die Preise und Preisfindung transparent.</p>
                <p>Tiere auszubeuten um Gewinn zu erzielen, könnte nicht weiter von unseren Zielen entfernt sein. Wir haben und aus Leidenschaft und Überzeugung für die Zucht dieser Rasse entschieden und möchten mit unserem Zuchtprogramm dazu beitragen einen gesunden Genpool dieser noch sehr seltenen Rasse in Deutschland und dem europäischen Ausland aufzubauen. Ich denke bei genauerem Nachdenken ist auch jedem klar, dass die Versorgung der Zuchthunde, die genetische und medizinische Auswertung, das Futter, die tierärztlichen Untersuchungen der trächtigen Hündin und ihrer Welpen, die Ausstattung usw. einen enormen Kostenfaktor ergeben, die bei einer typisch kleinen Wurfgröße von 3-4 Welpen, maximal gedeckt werden können.</p>
                <p>Unsere Hunde sollen ihren Besitzern Freude bereiten und Familienmitglieder sein, daher geben wir sie als reine Haustiere ab. Vertraglich wird die Pflicht zur Kastration bis zum 3. Lebensjahr festgehalten.</p>
                <p>Wir behalten uns vor in Ausnahmefällen einzelne Tiere in Zuchtqualität an kleine ausgewählte Zuchtprogramme abzugeben. </p>
                <p>Der Preis für jeden Welpen wird ab der 5. Woche individuell nach Erscheinungsbild und Wesensmerkmale bestimmt und startet bei 2.000 €.</p>
            </div>
        </div>
    );
}