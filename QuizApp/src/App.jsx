import { useEffect } from 'react'
import { useState } from 'react'

import Intro from './Intro'
import Quiz from './Quiz'
import Design from './Design'




// Main Component
function App() {

  const [isClicked,changeStart] = useState(false)

  const [quiz,setQuiz] = useState([])



  function getQuiz(){
      //console.log('reunning')
      fetch('https://the-trivia-api.com/api/questions?limit=5')
      .then(res => res.json())
      .then(data => {
        setQuiz(data)
        console.log('render, new quiz')
      })
  } 

  function startQuiz(){
    changeStart(!isClicked)
    getQuiz()
  }

  

  
  return (
    <div className="relative z-[0] h-screen App bg-bg2">
      {!isClicked &&  
      <Intro
       handleClick = {startQuiz}/>}

       {isClicked && quiz.length ?
       <Quiz
       quiz={quiz} 
       startQuiz = {startQuiz}/> : ''}

      <Design/>

    </div>  
  )
}

export default App

