import React from 'react';
import ReactDOM from 'react-dom';
import App from "components/App/App"
import axios from 'axios'

// Une promesse est un objet représentant l'achèvement ou l'échec éventuel d'une opération asynchrone.
// Une promise est un objet qui represente une opération asynchrone. Une promise peut avoir trois états:
//      - La promise est en attente : Ce qui veut dire que la valeur final n'est pas encore disponible.
//      - La promesse est tenue : Cela signifie que l'opération est terminée et que la valeur finale est disponible,
//                        ce qui est généralement une opération réussie. Cet état est parfois aussi appelé "résolu".
//      - La promesse est rejetée : Cela signifie qu'une erreur a empêché de déterminer la valeur finale,
//                                  ce qui représente généralement une opération ratée.
// La promise contient le résultat de la requete.

// Le résultat d'une promesses peut etre accéder grace à un gestionnaire d'événement.
// Donc une fois que la requete est faite on traite la reponse

// Veuillez noter que cette approche présente de nombreux problèmes,
// car nous ne rendons l'intégralité du composant App que lorsque nous récupérons une réponse avec succès :
// les hook effects est l'outil adéquat à utiliser lors de la récupération de données sur un serveur.
/*
axios
    .get('http://localhost:3001/notes')
    .then(response => {
        const notes = response.data
        console.log(notes)
        ReactDOM.render(<App notes={notes}/>,
        document.getElementById('root'))
    })
*/
ReactDOM.render(<App/>, document.getElementById('root'))