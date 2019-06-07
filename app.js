let Nom = ["Tom Sawyer", "Joey Starr", "Marc Dutrou", "Johnny Hallyday", "Bob l'Éponge", "Squeezie", "Garou", "Carla Bruni", "Madonna", "Bill Gates", "Jennifer Lopez", "Zinedine Zidane", "Marine Le Pen", "Jean-Luc Mélenchon", "Rachida Dati", "Mireille Mathieu", "La chèvre de monsieur Seguin", "Passe-Partout", "Mimie Mathy", "Gilderoy Lockheart", "Denver le dernier dinosaure", "Sacha du Bourg-Palette", "La Team Rocket", "Simba", "Hitler"];
let Verbe = ["danse", "chante", "se touche", "se trémousse", "eternue", "vomit", "découpe des gens", "tue son père", "se fait exploser", "mange ses godasses", "cherche des emmerdes", "se caresse les orteils", "frappe dans l'eau", "mange des enfants", "pète", "crie Allahu Akbar", "tond le gazon", "dégomme un poney", "crache sur tout le monde", "rit aux éclats", "tombe en dépression", "se casse le bras", "mange un string", "éclate ses boutons", "expédie ses ennemis en enfer", "te shoote dans la gueule"];
let Cod = ["d'une étrange manière", "de façon éronée", "bruyamment", "doucement", "fermement", "avec conviction", "sans aucune forme de pitié", "en toute impunité", "de façon indigne", "tout en délicatesse", "le sourire aux lèvres", "de manière hasardeuse", "avec hésitation", "comme un.e pro", "comme une merde", "comme un.e psychopathe", "avec les larmes aux yeux", "et s'envole vers d'autres cieux", "et disparaît dans un nuage de fumée", "puis décapite ses ennemis", "lentement mais sûrement", "puis se fait arrêter", "et se lave les mains", "et élimine son interlocueur", "et se téléporte en Antarctique", "et hurle comme un.e taré.é", "et monte au paradis", "et envoie ton crâne aux Philippines"];

let randomNom = Nom[Math.floor(Math.random() * Nom.length)];
let randomVerbe = Verbe[Math.floor(Math.random() * Verbe.length)];
let randomCod = Cod[Math.floor(Math.random() * Cod.length)];


document.getElementById("titre").innerHTML = randomNom + ' ' + randomVerbe + ' ' + randomCod;

setTimeout(function () {
    window.location.reload(1);
}, 4000);