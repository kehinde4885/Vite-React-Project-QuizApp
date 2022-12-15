import { useEffect } from 'react'
import { useState } from 'react'

import Intro from './Intro'
import Quiz from './Quiz'
import Design from './Design'




// Main Component
function App() {

  const [isClicked , changeStart] = useState(true)

  const [quiz,setQuiz] = useState([])

  //console.log(quiz)


  function handleClick(){
    changeStart(!isClicked)
    getQuiz()
  }

  
  function getQuiz(){
    fetch('https://the-trivia-api.com/api/questions?limit=5')
    .then(res => res.json())
    .then(data => {
      setQuiz(data)
      console.log('render, new quiz')
    })
  }

  
  return (
    <div className="relative z-[0] h-screen App bg-bg2">
      {isClicked &&  
      <Intro
       handleClick = {handleClick}/>}

       {!isClicked && quiz.length ?
       <Quiz
       quiz={quiz}/> : ''}

      <Design/>

    </div>  
  )
}

export default App

