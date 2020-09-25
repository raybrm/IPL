import React from 'react';

import Header from "components/Header/Header"
import Content from "components/Content/Content"
import Total from "components/Total/Total"
import './style.css'

// Permet de créer un composant React grâce à JFX
// Ici 'App' est tout en haut de l'arboresence des composants qu'on a créer
const App = () => { // fonction fléché JS
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div className="App">
        <Header title={course}/>
        <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
        <Total total={exercises1 + exercises2 + exercises3}/>
      </div>
    )
  }

export default App