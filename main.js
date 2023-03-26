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
        
        document.getElementById("ideas").innerHTML += "<div class='idea' onclick='showIdea(`" + validIdeas[i].title + "`)'>" + ideaContent + "</p></div>";
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
        "title": "Elysianer",
        "description": "Das Volk der Elysianer lebt in den Wolken und verehren einen Gott, den sie Elyon nennen. Sie haben eine fortgeschrittene Kultur und Technologie, die auf einer seltenen Ressource namens Aether basiert. Sie haben auch ein mächtiges Militär, das aus Kriegern besteht, die goldene Rüstungen tragen und magische Waffen schwingen. <== Geschichte ==> Die Elysianer behaupten, dass sie die ersten Menschen waren, die von Elyon aus seinem Atem erschaffen wurden. Sie sagen, dass er ihnen ein Reich in den Wolken schenkte, um sie vor den Gefahren der Erde zu schützen. Sie sagen auch, dass er ihnen die Gabe des Aethers gab, um ihnen zu helfen, seine Schöpfung zu bewahren und zu verbessern. Die Elysianer haben eine lange und ruhmreiche Geschichte, die von ihren Chronisten aufgezeichnet wurde. Sie haben viele Errungenschaften und Wunder vollbracht, wie den Bau ihrer Wolkenstädte, die Entwicklung ihrer Magie und Medizin und die Erforschung der Sonne und der Sterne. Sie haben auch viele Prüfungen und Leiden überstanden, wie Naturkatastrophen, Seuchen und Kriege. Die Elysianer haben nur selten Kontakt mit anderen Völkern gehabt, da sie sich für die auserwählten Kinder Elyons halten und die Erde für einen verfluchten Ort halten. Sie haben auch einige Konflikte mit den Erdlingen gehabt, die versucht haben, ihre Wolken zu erobern oder ihren Aether zu stehlen. Die Elysianer stehen vor einer großen Herausforderung in ihrer aktuellen Zeit, da eine dunkle Prophezeiung verkündet hat, dass Elyon bald zurückkehren wird, um seine Kinder zu richten. Einige Elysianer glauben, dass sie bereit sind, ihn zu empfangen und seine Belohnung zu erhalten. Andere glauben, dass sie sich reformieren müssen, um seine Gnade zu erlangen. Wieder andere glauben, dass sie sich gegen ihn auflehnen müssen, um ihre Freiheit zu verteidigen. <== Gesellschaft ==> Die Elysianer haben eine strenge Hierarchie, die auf Alter, Geschlecht und Verdienst basiert. Die Ältesten sind die Weisesten und haben die meiste Autorität. Die Frauen sind für die Erziehung der Kinder und die Pflege des Haushalts zuständig. Die Männer sind für den Schutz und die Versorgung der Gemeinschaft verantwortlich. Die Elysianer haben einen hohen Priester, der als der Sprecher Elyons fungiert und die heiligen Schriften interpretiert. Er hat das letzte Wort in allen religiösen Angelegenheiten und kann Gesetze erlassen oder aufheben. Er wird von einem Rat von zwölf Kardinälen unterstützt, die ihn beraten und vertreten. Die Elysianer haben einen König, der als der Beschützer Elyons fungiert und das Militär anführt. Er hat das letzte Wort in allen militärischen Angelegenheiten und kann Krieg erklären oder Frieden schließen. Er wird von einem Rat von zwölf Generälen unterstützt, die ihn beraten und vertreten. <br>Die Elysianer haben auch verschiedene Adelsfamilien, die über verschiedene Regionen oder Bereiche herrschen. Sie haben verschiedene Titel wie Herzog, Graf oder Baron. Sie haben verschiedene Privilegien und Pflichten je nach ihrem Rang und ihrer Loyalität zum Priester oder zum König. Die Elysianer haben auch verschiedene Berufsgruppen oder Gilden, die sich um verschiedene Aspekte ihrer Kultur kümmern. Sie haben verschiedene Namen wie Architekt, Ingenieur oder Chronist. Sie haben verschiedene Fähigkeiten und Kenntnisse je nach ihrem Fachgebiet und ihrer Ausbildung."
    },
    {
        "title": "Morlocks",
        "description": "Die Morlocks sind ein fiktives Volk, das in der Literatur und Popkultur vorkommt. Sie leben in einer unterirdischen Welt und haben eine ungewöhnliche körperliche Erscheinung, mit verschiedenen Hautfarben wie grün und grau, spitzen Zähnen und extremer Muskelkraft. Ihr Leben wird von einem ewigen Krieg durch die unterirdische Welt bestimmt, die den Menschen verborgen unter ihren Füßen liegt. <==Geschichte==>Die Geschichte der Morlocks ist von ihren Hexen mündlich überliefert und behauptet, dass sie die verstoßenen Kinder der Götter der Unterwelt sind, die von diesen verflucht und verbannt wurden. Sie lebten einst an der Oberfläche, bis sie von den Menschen verraten und gejagt wurden. Die Morlocks haben in ihrer Geschichte viele Prüfungen und Leiden überstanden, wie Hunger, Krankheit und Tod. Sie haben nur selten Kontakt mit anderen Völkern gehabt, da sie sich für die verfluchten Erben der Unterwelt halten und die Oberfläche für einen verbotenen Ort halten. <==Gesellschaft==>In der Gesellschaft der Morlocks gibt es eine lose Hierarchie, die auf Stärke, Geschick und Mut basiert. Die Anführer haben die meiste Autorität, die Jäger und Sammler haben die meiste Verantwortung und die Krieger und Helden haben den meisten Respekt. Die Morlocks haben keinen gemeinsamen Glauben oder Kult, sondern verehren verschiedene Aspekte der Götter der Unterwelt oder der Dunkelheit. Sie haben keinen festen Priester oder Hexe, sondern jeder kann seine eigene Vision oder Offenbarung haben. Die Morlocks haben keinen gemeinsamen König oder Häuptling, sondern leben in verschiedenen Clans oder Stämmen, die verschiedene Namen wie Wolfclan, Bärenstamm oder Eulenhorde tragen. Sie haben verschiedene Merkmale oder Bräuche je nach ihrer Herkunft oder ihrer Umgebung. Die Morlocks respektieren die Stärke und den Mut und verachten die Schwäche und Feigheit. Sie haben eine starke Loyalität und Solidarität gegenüber ihren Clans oder Stämmen. Sie sind auch sehr gastfreundlich und großzügig gegenüber ihren Freunden oder Verbündeten."
    },
    {
        "title": "Tyranniden",
        "description": ""
    }
];

function simplifyString(_string) {
    _string = _string.toLowerCase();
    return _string;
}