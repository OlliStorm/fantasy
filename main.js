window.onload = function () {
    showIdeas();
}

function showIdeas() {
    document.getElementById("ideas").innerHTML = "";
    let searchTerm = simplifyString(document.getElementById("search_input").value);
    let validIdeas = [];
    for (let i = 0; i < ideas.length; i++) {
        if (simplifyString(ideas[i].title).includes(searchTerm)) {
            validIdeas.push(ideas[i]);
        }
    }
    for (let i = 0; i < validIdeas.length; i++) {
        let description = validIdeas[i].description;
        if (description.length > 200) {
            description = description.substring(0, 200) + "...";
        }
        let ideaContent = "<h3>" + validIdeas[i].title + "</h3><p>" + description

        document.getElementById("ideas").innerHTML += "<div class='seperator'></div><div class='idea' onclick='showIdea(`" + validIdeas[i].title + "`)'>" + ideaContent + "</p></div>";
    }
}

function showIdea(title) {
    for (let i = 0; i < ideas.length; i++) {
        if (ideas[i].title == title) {
            document.getElementById("idea").innerHTML = (`<button class="btn btn-dark" onclick="back();">Zurück</button><h2>` + ideas[i].title + "</h2><p>" + ideas[i].description + "</p>").replaceAll("<==", "</p><h3>").replaceAll("==>", "</h3><p>");
            document.getElementById("container_ideas").style.display = "none";
            document.getElementById("container_idea").style.display = "block";
        }
    }
}

function back() {
    document.getElementById("container_idea").style.display = "none";
    document.getElementById("container_ideas").style.display = "block";
}

let ideas = [
    {
        "title": "Edelsteine",
        "description": "Edelsteine sind in Stufen unterteilt, die ihnen mit steigender Stufe mehr Funktionalität gewehren."
    },
    {
        "title": "Elysianer",
        "description": "Das Volk der Elysianer lebt in den Wolken und verehren einen Gott, den sie Elyon nennen. Sie haben eine fortgeschrittene Kultur und Technologie, die auf einer seltenen Ressource namens Aether basiert. Sie haben auch ein mächtiges Militär, das aus Kriegern besteht, die goldene Rüstungen tragen und magische Waffen schwingen. <== Geschichte ==> Die Elysianer behaupten, dass sie die ersten Menschen waren, die von Elyon aus seinem Atem erschaffen wurden. Sie sagen, dass er ihnen ein Reich in den Wolken schenkte, um sie vor den Gefahren der Erde zu schützen. Sie sagen auch, dass er ihnen die Gabe des Aethers gab, um ihnen zu helfen, seine Schöpfung zu bewahren und zu verbessern. Die Elysianer haben eine lange und ruhmreiche Geschichte, die von ihren Chronisten aufgezeichnet wurde. Sie haben viele Errungenschaften und Wunder vollbracht, wie den Bau ihrer Wolkenstädte, die Entwicklung ihrer Magie und Medizin und die Erforschung der Sonne und der Sterne. Sie haben auch viele Prüfungen und Leiden überstanden, wie Naturkatastrophen, Seuchen und Kriege. Die Elysianer haben nur selten Kontakt mit anderen Völkern gehabt, da sie sich für die auserwählten Kinder Elyons halten und die Erde für einen verfluchten Ort halten. Sie haben auch einige Konflikte mit den Erdlingen gehabt, die versucht haben, ihre Wolken zu erobern oder ihren Aether zu stehlen. Die Elysianer stehen vor einer großen Herausforderung in ihrer aktuellen Zeit, da eine dunkle Prophezeiung verkündet hat, dass Elyon bald zurückkehren wird, um seine Kinder zu richten. Einige Elysianer glauben, dass sie bereit sind, ihn zu empfangen und seine Belohnung zu erhalten. Andere glauben, dass sie sich reformieren müssen, um seine Gnade zu erlangen. Wieder andere glauben, dass sie sich gegen ihn auflehnen müssen, um ihre Freiheit zu verteidigen. <== Gesellschaft ==> Die Elysianer haben eine strenge Hierarchie, die auf Alter, Geschlecht und Verdienst basiert. Die Ältesten sind die Weisesten und haben die meiste Autorität. Die Frauen sind für die Erziehung der Kinder und die Pflege des Haushalts zuständig. Die Männer sind für den Schutz und die Versorgung der Gemeinschaft verantwortlich. Die Elysianer haben einen hohen Priester, der als der Sprecher Elyons fungiert und die heiligen Schriften interpretiert. Er hat das letzte Wort in allen religiösen Angelegenheiten und kann Gesetze erlassen oder aufheben. Er wird von einem Rat von zwölf Kardinälen unterstützt, die ihn beraten und vertreten. Die Elysianer haben einen König, der als der Beschützer Elyons fungiert und das Militär anführt. Er hat das letzte Wort in allen militärischen Angelegenheiten und kann Krieg erklären oder Frieden schließen. Er wird von einem Rat von zwölf Generälen unterstützt, die ihn beraten und vertreten. <br>Die Elysianer haben auch verschiedene Adelsfamilien, die über verschiedene Regionen oder Bereiche herrschen. Sie haben verschiedene Titel wie Herzog, Graf oder Baron. Sie haben verschiedene Privilegien und Pflichten je nach ihrem Rang und ihrer Loyalität zum Priester oder zum König. Die Elysianer haben auch verschiedene Berufsgruppen oder Gilden, die sich um verschiedene Aspekte ihrer Kultur kümmern. Sie haben verschiedene Namen wie Architekt, Ingenieur oder Chronist. Sie haben verschiedene Fähigkeiten und Kenntnisse je nach ihrem Fachgebiet und ihrer Ausbildung."
    },
    {
        "title": "Metalle",
        "description": `Die folgende Liste der wichtigsten Metalle ist nach ihrem Machtmultiplikator geordnet. Metalle bilden die wichtigste Resourcengruppe für Ausrüstung und Waffen. Manche Metalle verfügen über bestimmte Eigenschaften, wodurch sie in gewissen Bereichen auch besser geeignet als eigentlich stärkere Metalle sein können.
    <li>
        <h4>Numbit</h4>
        <p>Braunes Metall, welches nur in gewissen Regionen vorkommt. Hat eine hohe elektrische Leitfähigkeit und ist gut verformbar.</p>
    </li>
    <li>
        <h4>Kupfer</h4>
        <p>Häufig in den obersten Schichten zu finden. Hat eine rötliche Farbe und eine hohe Wärmeleitfähigkeit. Ist korrosionsanfällig und weich.</p>
    </li>
    <li>
        <h4>Zinn</h4>
        <p>Ähnlich häufig wie Kupfer. Hat eine silberweiße Farbe und eine geringe Härte. Ist beständig gegen Luft und Wasser.</p>
    </li>
    <li>
        <h4>Bronze</h4>
        <p>Legierung aus Kupfer und Zinn. Hat eine gelbliche bis bräunliche Farbe und eine höhere Härte als Kupfer. Ist korrosionsbeständig und schmelzt bei niedrigerer Temperatur als Kupfer.</p>
    </li>
    <li>
        <h4>Gold</h4>
        <p>Deutlich seltener und kleinere Vorkommen als bei Zinn und Kupfer. Eignet sich überdurchschnittlich gut für Verzauberungen. Hat eine gelbe Farbe und einen hohen Glanz.</p>
    </li>
    <li>
        <h4>Silver</h4>
        <p>Seltenes Metall, welches über alle Oberwelt-Schichten verteilt ist. Erhöhter Schaden gegen durch dunkle Magie betriebene Monster. Hat eine weiße Farbe und einen hohen Glanz.</p>
    </li>
    <li>
        <h4>Eisen</h4>
        <p>Etwas seltener als Zinn und Kupfer und auch erst etwas tiefer gelegen. Hat eine graue Farbe und eine hohe Festigkeit. Ist magnetisch und rostet leicht.</p>
    </li>
    <li>
        <h4>Platin</h4>
        <p>Etwas seltener als Gold. Hat eine silberweiße Farbe und einen hohen Glanz. Ist sehr hart und beständig gegen Korrosion.</p>
    </li>
    <li>
        <h4>Stahl</h4>
        <p>Verfeinerte Variante von Eisen. Legierung aus Eisen und Kohlenstoff. Hat eine graue Farbe und eine höhere Festigkeit als Eisen. Ist weniger magnetisch und rostet weniger leicht.</p>
    </li>
    <li>
        <h4>Palladium</h4>
        <p>Knallrotes Metall, welches nur in tiefen Schichten zu finden ist. Hat eine hohe Dichte und eine hohe Schmelztemperatur. Ist sehr hart und beständig gegen Korrosion.</p>
    </li>
    <li>
        <h4>Adamantium</h4>
        <p>Rubinrotes Metall, welches nur in den tiefsten Schichten zu finden ist. Seltener als Palladium. Hat eine extrem hohe Dichte und eine extrem hohe Schmelztemperatur.</p>
    </li>
    <li>
        <h4>Orchadium</h4>
        <p>Metall, welches nur an den tiefsten Stellen von Meeren vorkommt. Schwerkraft wirkt Unterwasser nicht.</p>
    </li>
    <li>
        <h4>Atlantis Stahl</h4>
        <p>Legierung aus Orchadium und weißem Stahl. Gleiche Eigenschaften wie bei Orchadium.</p>
    </li>
    <li>
        <h4>Weißer Stahl</h4>
        <p>Legierung aus Silber, Platin und Quarz. Dunkle Variante nicht möglich.</p>
    </li>
    <li>
        <h4>Meteoritenstahl</h4>
        <p>Meteoritenstaub, welcher mit gewöhnlichem Stahl gebunden wurde.</p>
    </li>
    <li>
        <h4>Mythril</h4>
        <p>Extrem seltenes Metall, welches ausschließlich in magischen Regionen vorkommt. Extrem leicht dafür wie stabil es ist.</p>
    </li>
    <li>
        <h4>Chleonix</h4>
        <p>Pinke Legierung aus Palladium, Mythril und Kobalt.</p>
    </li>
    <li>
        <h4>Schattenstahl</h4>
        <p>Legierung aus Adamantium und dunklem Gestein. Dunkle Variante nicht möglich. Verstärkte Stabilität bei Dunkelheit.</p>
    </li>
    <li>
        <h4>Schatten-Mythril</h4>
        <p>Legierung aus Mythril und Schattenstahl. Dunkle Variante nicht möglich. Gleiche Eigenschaften wie bei Schattenstahl.</p>
    </li>
    <li>
        <h4>Dämonit</h4>
        <p>Seltenes Metall, welches nicht natürlich in der Oberwelt vorkommt. Lässt sich nur durch Strom erhitzen.</p>
    </li>
    <li>
        <h4>Sternenstahl</h4>
        <p>Legierung aus Mythril und Sternenstaub. Absorbiert Energie durch das Licht der Sterne. Muss bei Vollmond an einer magischen Stelle geschmiedet werden.</p>
    </li>
    <li>
        <h4>Formbares Element 0</h4>
        <p>Legierung aus weißem Stahl und Element 0.</p>
    </li>
    <li>
        <h4>Glänzendes Chleonix</h4>
        <p>Legierung aus Chleonix und Sternenstaub. Gleiche Eigenschaften wie bei Sternenstahl.</p>
    </li>
    <li>
        <h4>Dämonenstahl</h4>
        <p>Legierung aus Schattenstahl und Dämonit.</p>
    </li>
    <li>
        <h4>Höllenstahl</h4>
        <p>Legierung aus Dämonit und dunklem Mythril. Benötigt eine Opfergabe in Kombination mit einem magischen Ritual um hergestellt werden zu können.</p>
    </li>
    <li>
        <h4>Infernit</h4>
        <p>Legierung aus Höllenstahl und Meteoritenstaub. Inferno Variante nicht möglich.</p>
    </li>
    <==Metall-Verbesserungen==>Darma-Variante<br>Magische Variante<br>Dunkle Variante<br>Inferno-Variante<br>Stellare Variante
`
    },
    {
        "title": "Morlocks",
        "description": "Die Morlocks sind ein fiktives Volk, das in der Literatur und Popkultur vorkommt. Sie leben in einer unterirdischen Welt und haben eine ungewöhnliche körperliche Erscheinung, mit verschiedenen Hautfarben wie grün und grau, spitzen Zähnen und extremer Muskelkraft. Ihr Leben wird von einem ewigen Krieg durch die unterirdische Welt bestimmt, die den Menschen verborgen unter ihren Füßen liegt. <==Geschichte==>Die Geschichte der Morlocks ist von ihren Hexen mündlich überliefert und behauptet, dass sie die verstoßenen Kinder der Götter der Unterwelt sind, die von diesen verflucht und verbannt wurden. Sie lebten einst an der Oberfläche, bis sie von den Menschen verraten und gejagt wurden. Die Morlocks haben in ihrer Geschichte viele Prüfungen und Leiden überstanden, wie Hunger, Krankheit und Tod. Sie haben nur selten Kontakt mit anderen Völkern gehabt, da sie sich für die verfluchten Erben der Unterwelt halten und die Oberfläche für einen verbotenen Ort halten. <==Gesellschaft==>In der Gesellschaft der Morlocks gibt es eine lose Hierarchie, die auf Stärke, Geschick und Mut basiert. Die Anführer haben die meiste Autorität, die Jäger und Sammler haben die meiste Verantwortung und die Krieger und Helden haben den meisten Respekt. Die Morlocks haben keinen gemeinsamen Glauben oder Kult, sondern verehren verschiedene Aspekte der Götter der Unterwelt oder der Dunkelheit. Sie haben keinen festen Priester oder Hexe, sondern jeder kann seine eigene Vision oder Offenbarung haben. Die Morlocks haben keinen gemeinsamen König oder Häuptling, sondern leben in verschiedenen Clans oder Stämmen, die verschiedene Namen wie Wolfclan, Bärenstamm oder Eulenhorde tragen. Sie haben verschiedene Merkmale oder Bräuche je nach ihrer Herkunft oder ihrer Umgebung. Die Morlocks respektieren die Stärke und den Mut und verachten die Schwäche und Feigheit. Sie haben eine starke Loyalität und Solidarität gegenüber ihren Clans oder Stämmen. Sie sind auch sehr gastfreundlich und großzügig gegenüber ihren Freunden oder Verbündeten."
    },
    {
        "title": "Tyranniden",
        "description": "Die Tyranniden sind eine größtenteils raptorartige Spezies. Eine besondere Eigenschaft ist, dass alle Tyranniden als ein Stamm fungieren. Sie ziehen durch die Welt und hinterlassen unglaubliche Zertörung. Tyranniden sind nicht Zeugungsfähig, alle von ihnen entstammen einer sogenannten Königin, die nicht mit ihrem Stamm herumzieht. Immer wieder kehrern die Schwärme zur Königin zurück und versorgen sie mit Nahrung."
    },
    {
        "title": "Vicani",
        "description": "Die Vicani sind eine menschenähnliche Wesen. Sie heben sich jedoch vor allem durch ihre übergroßen Nasen von den gewöhnlichen Menschen ab, die ihnen einen außergewöhnlichen Geruchssinn verleihen. Mit diesem Geruchssinn können sie wertvolle Materialien wie Edelsteine aufspüren, was ihnen einen Vorteil im Handel verschafft. Die Vicani sind vor allem als Händler bekannt, die in verschiedenen Regionen der Welt tätig sind. Sie haben einen ausgeprägten Sinn für Geschäft und Profit und werden oft als gierig und egoistisch beschrieben. <==Anatomie und Physiologie==> Die Vicani sind humanoid und haben eine ähnliche Größe und Gestalt wie die Menschen. Der auffälligste Unterschied ist ihre Nase, die deutlich größer ist als die der Menschen. Die Nase ist mit zahlreichen Rezeptoren ausgestattet, die es den Vicani ermöglichen, feinste Gerüche wahrzunehmen. Die Vicani können nicht nur verschiedene Düfte unterscheiden, sondern auch ihre Quelle lokalisieren. Dies ist besonders nützlich für die Suche nach wertvollen Materialien wie Edelsteinen, die einen charakteristischen Geruch haben. Die Vicani haben eine ähnliche Lebenserwartung wie die Menschen, aber sie altern schneller. Sie erreichen die Geschlechtsreife mit etwa 10 Jahren und werden selten älter als 60 Jahre. Die Vicani sind omnivor und haben keine besonderen Ernährungsbedürfnisse. Sie sind jedoch anfällig für bestimmte Krankheiten, die ihre Nasenschleimhaut schädigen können. <==Kultur und Gesellschaft==> Die Vicani haben keine eigene Kultur oder Religion entwickelt, sondern passen sich an die lokalen Gegebenheiten an. Sie leben in Koexistenz mit den Menschen, aber sie sind deutlich in der Minderheit. Sie bevorzugen städtische Gebiete oder Handelsrouten, wo sie sich als Kaufleute, Schmuggler, Diebe oder Hehler einen Namen machen. Die Vicani haben keine feste Loyalität oder Moralvorstellungen, sondern handeln nach dem Prinzip des größten Nutzens für sich selbst. Die Vicani leben meist in kleinen Familien oder Gruppen zusammen, die sich um gemeinsame Interessen oder Geschäfte kümmern. Sie haben keine formelle Hierarchie oder Führung, sondern entscheiden demokratisch oder durch Verhandlungen. Die Vicani sind sehr kommunikativ und nutzen sowohl verbale als auch nonverbale Signale. Sie sprechen meist mehrere Sprachen und können sich leicht anpassen. <==Geschichte und Konflikte==> Die Vicani sind seit langer Zeit auf dem Planeten Xylo präsent, aber ihre genaue Herkunft ist unbekannt. Einige Theorien besagen, dass sie das Ergebnis einer genetischen Manipulation oder einer natürlichen Mutation sind. Andere Theorien besagen, dass sie von einem anderen Planeten stammen oder von einer alten Zivilisation abstammen. Die Vicani sind oft in Konflikte mit anderen Spezies oder Gruppen involviert, da sie ihre Interessen verteidigen oder ausnutzen wollen. Sie können sowohl Verbündete als auch Feinde sein, je nachdem, wie es ihnen nützt. Die Vicani sind auch für einige überraschende Entdeckungen und Geheimnisse verantwortlich, die das Verständnis der Welt und ihrer Geschichte beeinflussen."
    }
];

function simplifyString(_string) {
    _string = _string.toLowerCase();
    return _string;
}