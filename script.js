/**
 * Checkpoint : Changeur de couleur interactif

Voici une description générale de ce que vous allez créer :

Le fichier HTML configure une page Web simple avec un en-tête, une boîte colorée et un bouton.
Le fichier CSS contient le style de base des éléments.
Le fichier JavaScript définit la fonctionnalité permettant de changer la couleur de la boîte lorsque l’on clique sur le bouton.
La fonction getRandomColor() génère un code de couleur hexadécimal aléatoire.
Lorsque vous cliquez sur le bouton, la fonction getRandomColor() est appelée et la couleur d’arrière-plan de la boîte (colorBox) est remplacée par la couleur générée.
Suivez maintenant les instructions ci-dessous :


Instructions


Configuration HTML :
Créez un nouveau fichier HTML.
Configurez la structure de base d’un document HTML avec le < ! DOCTYPE html> les balises <html>, <head> et <body>.
Ajoutez un titre au document, par exemple « Changeur de couleurs ».
Créez l’interface :
À l’intérieur de la balise body, créez un élément <div> avec le nom de classe « container ».
À l’intérieur du conteneur, ajoutez un élément <h1> avec le texte « Changeur de couleur ».
Créez un autre élément <div> avec l’id « color-box ». Celle-ci représentera la boîte dont la couleur va changer.
Ajoutez un élément <button> avec l’id « change-color-btn ». Le bouton doit avoir le texte « Changer de couleur ».
Style avec CSS :
Créez un fichier CSS et liez-le à votre document HTML à l’aide de la balise <link>.
Stylisez la classe conteneur pour centrer son contenu horizontalement et donnez-lui une marge supérieure pour l’espacement.
Donnez un style à l’identifiant de la boîte de couleur avec une largeur et une hauteur fixes, et définissez une couleur d’arrière-plan par défaut.
Stylisez l’identifiant change-color-btn pour le rendre visuellement attrayant et facilement cliquable.
JavaScript pour l’interactivité :
Créez un fichier JavaScript et liez-le à votre document HTML à l’aide de la balise <script>.
Écrivez du code JavaScript pour attendre que le contenu DOM soit chargé à l’aide de l’événement DOMContentLoaded.
Dans le gestionnaire d’événements, sélectionnez les éléments color-box et change-color-btn à l’aide de document.getElementById().
Implémentez une fonction, appelons-la getRandomColor(), qui génère une couleur aléatoire. Vous pouvez utiliser des valeurs hexadécimales ou RVB.
Ajoutez un écouteur d’événements à l’élément change-color-btn. Lorsqu’il est cliqué, l’écouteur d’événements doit déclencher une fonction qui change la couleur d’arrière-plan de la boîte de couleur en une couleur aléatoire générée par la fonction getRandomColor().
Test:
Ouvrez votre fichier HTML dans un navigateur Web.
Cliquez sur le bouton « Changer de couleur » et observez la couleur de la boîte changer dynamiquement.
 */
const changer = document.querySelector('button')
const couleur = document.getElementsByClassName('.couleur')


const changer_couleur = () => {
    const couleur = getRandomColor()
    document.querySelector('.couleur').style.backgroundColor = couleur
    console.log(getRandomColor())
}
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `#${r}${g}${b}`
}
changer.addEventListener('click', changer_couleur)

