import React, {useState} from 'react'
import Note from 'components/Note/Note'

const App = (props) => { // destructuring le props... props = {notes : array[]}
    // la 'KEY' ne se met pas dans <li> mais dans composant Note.
    const [notes, setNotes] = useState(props.notes) // initialise notes avec le tableau de base (props.notes)
    const [newNote, setNewNote] = useState('a new note ...') // stocke la soumission de l'utilisateur
    const [showAll, setShowAll] = useState(true) // les notes qui doivent être affiché 

    // notesToShow est un array contenant les notes à afficher
    const notesToShow = showAll ? notes : notes.filter(note => note.important) // soit on affiche tt soit les notes importantes

    // Ajoute une note
    const addNote = (event) => { // event => l'évement qui déclenche l'appel de la fonction ici c'est form
        event.preventDefault() // empeche l'action par défaut qui est le rechargement de la page
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