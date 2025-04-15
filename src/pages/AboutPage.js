import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";


export default function AboutPage() {

    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MiniMate - Toy Australian Shepherd Zucht",
        "description": "Kleine Hobbyzucht von Toy Australian Shepherds im Harz. Fokus auf Gesundheit, Temperament und Schönheit.",
        "founders": [
            {
                "@type": "Person",
                "name": "Amanda",
                "description": "Mitbegründerin der MiniMate Zucht"
            },
            {
                "@type": "Person",
                "name": "Ewa",
                "description": "Mitbegründerin der MiniMate Zucht"
            }
        ],
        "location": {
            "@type": "Place",
            "name": "The Cold Well",
            "description": "Ein idyllischer Hof im Harz, der seit 1766 in Familienbesitz ist. Hier leben wir mit unseren Hunden, Hühnern, Enten und Katzen."
        },
        "areaServed": {
            "@type": "Country",
            "name": "Deutschland"
        },
        "experience": {
            "@type": "EducationalOccupationalCredential",
            "name": "Hundezucht Erfahrung",
            "credentialCategory": "Personal Experience",
            "yearsOfExperience": "90",
            "description": "Über 90 Jahre gemeinsame Erfahrung mit Hunden verschiedener Rassen"
        }
    };

    return (
        <div id="about_page">
            <script type="application/ld+json">
                {JSON.stringify(aboutSchema)}
            </script>
            <h2 className="headline">Über uns</h2>
            <div className="about_us">
                <p className="about_title">Wer The Cold Well ist? Das sind wir! Amanda und Ewa vom Hof im Kalten Brunnen</p>
                <div class="wrapper">
                    <div>
                        <p>Meine Lebensgefährtin Ewa und ich leben hier im wunderschönen Harz auf dem alten Hof meiner Familie. Seit 1766 wurde hier landwirtschaftlich gearbeitet und auf den Obstplantagen, im Stall und auf dem Feld gemeinsam angepackt. Auch wenn sich die berufliche Ausrichtung in unserer Familie in den letzten Generationen geändert hat, ist die Leidenschaft für die Landwirtschaft, Verbundenheit zur Natur und die Liebe für Tiere geblieben. So teilen wir uns diesen idyllischen Ort nun mit unseren Hühnern, Enten, Katzen und Hunden. Mein Großvater Fritz, meine Mutter Bettina, mein Bruder Simon mit seiner Frau Mona und den gemeinsamen Kindern Friedrich und Otto, machen das Chaos perfekt ;)</p>
                        <p>Ewa und ich hatten schon immer Tiere. Von der kleinen Maus bis zum Pferd war da schon fast alles dabei. Hunde haben uns beide jedoch am längsten begleitet. Wenn wir die Jahre aller Hunde, die uns im Leben begleitet haben zusammenrechnen, kommen wir inzwischen auf über 90 Jahre Erfahrung mit Hunden.</p>
                        <p>Neben verschiedenen Pflegehunden aus dem Tierschutz, und einigen Familienhunden, die ihr Lebensende schon hinter sich gebracht haben, möchte ich einen ganz besonders hervorheben:</p></div>
                    <div>
                        <img src="gfx/chickens_3.webp" loading="lazy" alt=""></img>
                    </div>

                </div>
                <div class="wrapper --reverse">
                    <div>
                        <img src="gfx/gfx_7.webp" loading="lazy" alt=""></img>
                    </div>
                    <div>
                        <p>Karlsson, ein grau gewolkter Deutscher Schäferhund, war mein erster Hund. Während der 14 Jahre, die er bei uns blieb, hat er mir viel über die Sprache und Bedürfnisse eines Hundes beigebracht und so viele schöne Erinnerungen geschaffen, dass ich sie gar nicht alle erzählen kann. Ohne Karlsson, seinen klugen Blick, die schnelle Auffassungsgabe und bedingungslose Ergebenheit, hätte ich nie meine Begeisterung für Hütehunde entdeckt! Egal ob Rhodesian Ridgeback, Boxer, Bullterrier, Labrador, Neufundländer, Podencos oder Mixe aus diesen und anderen Rassen – sie waren alle toll auf ihre Art und Weise. Die Partnerschaft zwischen Mensch und Hund, die ich mit Karlsson kennenlernen durfte, habe ich bisher allerdings nur beim Hütehund gefunden. Karlsson brauchte in den letzten Wochen vor seinem Tod viel Pflege und musste zeitweise aufgrund einer Verletzung getragen werden. 35 sperrige Kilogramm mehrfach am Tag vorsichtig auf eine Wiese und zurück ins Haus zu tragen gestaltete sich zunehmend schwieriger, sodass wir erst die Pflege in Schichten aufteilten und irgendwann nur noch zu Dritt den armen Kerl bewegen konnten. </p>
                    </div>
                </div>

                <p>Das war eine schmerzhafte, aber wichtige Erfahrung, die uns für die Adoption eines neuen Hundes die Augen geöffnet und uns schlussendlich auf die Toy Australian Shepherds aufmerksam gemacht hat. Ein Hütehund, der für seinen unvergleichlichen "will to please" bekannt ist, sich ganz seinem Besitzer hingibt und auf Grund der handlichen Größe überall dabei sein kann. Ein Hund, der erst seit verhältnismäßig kurzer Zeit von den amerikanischen Schafsfarmen in die Wohnzimmer von Familien umgezogen ist und dadurch zähe, anpassungsfähige kleine Allround-Talente geworden sind.</p>
                <p>Schon nach kurzer Zeit mit einem Toy Aussie in unserem Leben, waren wir absolut begeistert von ihrer Loyalität und Intelligenz. Noch nie hatten wir einen so anpassungsfähigen und unproblematischen Hund gesehen. Für uns war klar, dass wir die Entwicklung und Etablierung dieser Rasse in Deutschland begleiten wollen. Und hier sind wir nun: The Cold Well's Minimates  </p>
            </div>
            <div className="about_contact">
                <p>Wenn du noch mehr über die Züchter deines Welpen und das Leben auf dem Hof wissen möchtest, kannst du gerne weiterlesen oder uns einfach kontaktieren.</p>
                <span id="read_toggler" onClick={handleClick} className={isActive ? 'open' : ''}>Weiterlesen <span className="--hide"><SlArrowUp />
                </span><span className="--show"><SlArrowDown /></span></span>
            </div>
            <div className="about_stories">
                <div className="about_story">
                    <div className="story_text">
                        <h5>Wie alles begann</h5>
                        <p>Ewas Großvater war ein lebensfroher Mensch mit breitgefächerten Interessen. Seine Hobbys – die Jagd, seine Bienenvölker und Hühner – haben seiner Familie so manches leckere Essen auf den Tisch gebracht. Nach seinem Tod haben die Bienen zwar neue Besitzer gefunden, aber die Hühner sind trotz Versorgung durch die Familie eines nach dem anderen verstorben. Alle, bis auf Abigail.</p>
                        <p>Abigail war eine 10 Jahre alte Hybridhenne und unser erstes Huhn. Als wir den Sommer 2021 damit verbrachten, für Abigail den alten Pferdestall in einen Hühnerstall umzubauen, hat sie den Grundstein für die ersten Schritte Richtung Selbstversorgung gelegt.</p>
                        <img loading="lazy" src="gfx/chickens_2.webp" class="--mobile" alt="" />
                        <p>Da Hühner in Gesellschaft leben möchten, folgten dann nicht viel später 3 Seidenhühner und ein passender Hahn dazu. Dann wurden wir angesprochen, ob wir nicht eine rangniedrige Henne aufnehmen könnten, da sie in ihrer Gruppe gepickt wurde. Also bekamen wir noch ein Orpington dazu. Dann schlüpften die ersten Küken, im nächsten Jahr weitere. Und so ging es weiter.</p>
                        <p>Inzwischen ist Abigail von uns gegangen, und viele verschiedene Hühnerrassen haben bei uns ein Zuhause gefunden. Wir können uns selbst, unsere Familie und sogar ein paar Kunden aus dem Dorf regelmäßig mit frischen Eiern von freilaufenden, stressfrei gehaltenen und glücklichen Hühnern versorgen.</p>
                        <p>Auch wenn es Stolpersteine auf dem Weg gab, wir vieles lernen mussten und leider auch schlechte Erfahrungen mit kommerziellen Hühnerhaltern machten, war es uns das absolut wert. Es gibt kaum etwas Schöneres für uns, als im Sommer nach getaner Arbeit im Hühnergarten zu sitzen und den Tieren beim Sonnenbaden zuzusehen.</p>
                    </div>
                    <div className="story_img">
                        <img loading="lazy" src="gfx/chickens_1.webp" alt="" />
                    </div>
                </div>
                <div className="about_story">
                    <div className="story_img">
                        <img loading="lazy" src="gfx/gfx_2.webp" alt="" />
                    </div>
                    <div className="story_text">
                        <h5>Hund, Katze, Maus?</h5>
                        <p>In meiner beruflichen Laufbahn habe ich viele Ortswechsel hinnehmen müssen. Karlsson sollte während all meiner Umzüge bei meiner Familie bleiben und den Hof bewachen. Mir selbst wieder ein Haustier anzuschaffen kam auch lange nicht in Frage, da ich ihnen aus beruflichen Gründen zeitlich nicht hätte gerecht werden können. Nach jedem einzelnen Umzug in der Vergangenheit habe ich es jedoch nie lange ohne Tiere ausgehalten und habe entweder private Pflegebeteiligungen übernommen oder in den lokalen Tierheimen ehrenamtlich unterstützt. 2014 war es dann aber soweit und ich konnte mir endlich den Wunsch erfüllen: Ein kleiner grauer Kater aus dem Nachbardorf sollte es werden. Nachdem ich bereits zugesagt hatte den Kleinen aufzunehmen, hörte ich von einem Fall des Animal Hoarding ganz in der Nähe. Ich wollte eigentlich nur schauen, ob ich bei der Auflösung helfen kann, aber die wunderschöne Glückskatze konnte ich dort nicht zurücklassen. Die Gesellschaft wäre sicherlich auch schön für die Zwei, dachte ich mir. Als ich sie in meinen Transporter setzen wollte, war dieser jedoch schon besetzt. Ihre Schwester, eine graue Katze mit vereinzelten roten Flecken, ließ sich nicht überreden dort zu bleiben. Also waren es am Ende gleich drei Katzen auf einen Streich...</p>
                        <img loading="lazy" src="gfx/cats_1.webp" class="--mobile" alt="" />
                        <p>Aus meinen kleinen scheuen Stubentigern sind über die letzten Jahre richtige Freigänger geworden und damit scheinen sie sehr zufrieden zu sein. Es wird nie langweilig, denn auf einem alten Hof wie unserem, gibt es überall kleine Nischen und Schlupflöcher, die für durchreisende kleine Nager auf der Suche nach Futter, einen willkommenen Unterschlupf darstellen. Unser Schwesterpaar Mira und Nola und Hofkater Oskar, sorgen aber zuverlässig dafür, dass sich eben diese kleinen ungebetenen Gäste nicht zu wohl fühlen und ihre Familienplanung anderen Orts verfolgen.</p>
                        <p>Auch wenn wir die kleinen Tierchen eigentlich ganz putzig finden, können sie das Futter und Wasser unserer Tiere verunreinigen und Krankheiten übertragen. Wir haben mit der Anschaffung unserer Haus- und Hoftiere die Verantwortung für sie übernommen und dieser Gefahr möchten wir sie nicht aussetzen.</p>
                    </div>

                </div>
                <div className="about_story">
                    <div className="story_text">
                        <h5>Wie wir zu den Enten kamen</h5>
                        <p>Gelegentlich, wenn wir mit den Hunden spazieren gehen, schließen sich unsere Katzen dem Spaziergang an. Und da das Gras auf der anderen Seite des Zauns ja bekanntlich immer besser schmeckt, verirrt sich auch manchmal ein Huhn mit auf den Weg. Dass wir so, als lustige Truppe, ein eher wunderliches Bild abgeben, hat sich inzwischen herumgesprochen und auch manchen Besucher und Nachbarn angelockt. Einer dieser Nachbarn stand eines Tages mit einem sorgfältig in ein Handtuch gebetteten Ei in der Hand vor uns.</p>
                        <p>In der Idylle rund um unser Dorf brüten jedes Jahr einige Stockenten. Eine Ente hat jedes Jahr im Garten des Nachbarn gebrütet, aber ein Marder hatte das Nest geplündert und nur dieses eine Ei war verschont geblieben.</p>
                        <p>Entenküken haben als Einzelgänger kaum Überlebenschancen und da das Ei erst kurze Zeit angebrütet sein konnte, habe ich ihm eine Chance gegeben und es mit einer Handvoll gekaufter Bruteier von Flugenten in unseren Notfallbrüter gelegt. Die Wildente sollte ausgewildert werden und die Hausenten im Anschluss neue Besitzer finden. Leider hat das Fundei in dieser sensiblen Phase der Entwicklung einen zu großen Schaden erlitten, sodass es nach einigen Tagen abgestorben ist. Aus drei der gekauften Bruteier sind allerdings kurze Zeit später quicklebendige Küken geschlüpft, die uns in den folgenden Wochen gut auf Trab gehalten haben. Entenküken prägen sich nach dem Schlupf auf das erste Lebewesen, das sie zu sehen bekommen. Ohne abendliche Kuscheleinheiten und Zudecken zur Schlafenszeit, hätten wir also vor lauter Geschrei wohl kein Auge zu bekommen...</p>
                        <p>Die drei sind inzwischen erwachsen geworden und haben sich aus dem Entenstall verabschiedet, um in dem Bach zu leben, der an unsere Obstwiese angrenzt. Sie hatten sich zwischenzeitlich mit einer Gruppe junger Stockenten angefreundet, kommen uns aber mehrfach täglich besuchen, plündern das Hühnerfutter oder watscheln über die Wiese auf der Suche nach Schnecken.</p>
                        <p>Auch wenn sie nicht geplant waren, möchten wir sie nicht mehr missen.</p>
                    </div>
                    <div className="story_img">
                        <img loading="lazy" src="gfx/gfx_13.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}