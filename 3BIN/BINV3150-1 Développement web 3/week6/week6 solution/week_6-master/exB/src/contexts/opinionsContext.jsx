import React, { useState } from "react";


const Context = React.createContext(null);

// An opinion is stored as an object : 
// {
//     id: new Date().getTime(), // integer
//     label: "Web 3 is awesome !",
//     score: 0,
// }
    
const ProviderWrapper = (props) => {

    const [ opinions, setOpinions] = useState([])

    // Modifie le vote d'une opinion
    const voteForOpinion = (id) => { // il faut travailler sur une copie et pas directement sur l'objet
        const index = opinions.findIndex((opinion) => opinion.id === id)
        if(index === -1){ // si l'opinion avec l'id n'existe pas
            console.warn("opinion with provided id does not exist", id);
            return;
        }
        const opinion = opinions[index];
        const newOpinion = { // créer une nouvelle opinion sur base de celle récupérer en changeant juste le score
            ...opinion,
            score: opinion.score + 1,
        }
        const newOpinions = [ // copie toutes la liste mais les références des objets sont les mêmes
            ...opinions 
        ];
        newOpinions[index] = newOpinion; // change vers quoi pointe le nouveau tab mais ça ne modifie pas l'original. 
        setOpinions(newOpinions);
    }

    const addOpinion = (label) => {
        const newOpinion = {
            id: new Date().getTime(),
            label: label,
            score: 1,
        }
        const newOpinions = opinions.concat(newOpinion); // créer une nouvelle copie.
        setOpinions(newOpinions);
    }

    const reset = () => {
        setOpinions([])
    }

    const sortedOpinions = opinions.sort( (a,b) => b.score - a.score )

    const exposedValue = {
        sortedOpinions,
        voteForOpinion,
        addOpinion,
        reset,
    }

    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider>
    )
}

export {
    Context,
    ProviderWrapper,
}
export default Context;