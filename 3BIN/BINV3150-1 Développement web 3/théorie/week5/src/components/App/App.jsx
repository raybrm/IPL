import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Note from 'components/Note/Note'

const App = (props) => { // destructuring le props... props = {notes : array[]}
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note ...')
    const [showAll, setShowAll] = useState(true)


    // 'effect' est toujours exécuté après que le composant a été rendu par défaut.
    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data) // refait le rendu du composant
            })

    }
    useEffect(hook, []) // [] permet d'éxécuter uniquement lors du premier rendu
    console.log('render', notes.length, 'notes')



    const notesToShow = showAll ? notes : notes.filter(note => note.important)

    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const noteObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
        }

        setNotes(notes.concat(noteObject)) // crée une nouvelle copie
        setNewNote('')
    }

    // Permet de synchroniser les changements fait dans l'input avec l'état dans le composant App.
    // Il faut donc modifier l'état newNote avec la méthode setNewNote
    // Comme on a mis un état(newNote) dans l'input il faut d'office appelé setNewNote pour modifier l'état.
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map((note) =>
                    <Note key={note.id} note={note}/>
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App