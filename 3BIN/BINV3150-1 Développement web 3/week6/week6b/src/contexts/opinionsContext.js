import React, {useState} from 'react'

const Context = React.createContext(null)

const ProvideWrapper = (props) => {

    const [ opinions, setOpinions ] = useState([{ title: 'Trump doit-il être président ', score: 1}]) // { title: "", score : 1}
    const [ newOpinion, setNewOpinion ] = useState('')


    const sortedOpinions = opinions.sort((opinion1, opinion2) => opinion2.score-opinion1.score)

    // Ne pas faire une deepcopy puis modifier et ensuite écraser la liste précédente, il faut travailler sur la même référence
    const increaseOpinion = (opinion) => {
        const clone = [...opinions] //  shallow copy
        const indexOpinion = clone.findIndex((op) => op.title === opinion.title)
        opinions[indexOpinion].score++
        setOpinions(clone)
    /*
        const myNewOpinions = opinions.map(op => {
            if (op.title === opinion.title) {
                return {...op, score: op.score +1} // shallow copy
            }
            return op
        })

       setOpinions(myNewOpinions)

     */
    }

    const addOpinion = () => {
        const opinion = {
            title : newOpinion,
            score : 1
        }
        setOpinions(opinions.concat(opinion))
        setNewOpinion('')
    }

    const exposedValue = {
        opinions,
        increaseOpinion,
        addOpinion,
        sortedOpinions,
        newOpinion, setNewOpinion,
    }
    
    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider>
    )
}

export {
    Context,
    ProvideWrapper
}

export default Context
