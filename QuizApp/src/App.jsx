import { useEffect } from 'react'
import { useState } from 'react'

import Intro from './Intro'
import Quiz from './Quiz'
import Design from './Design'

async function getQuiz(){
  let questions = await fetch('https://the-trivia-api.com/api/questions?limit=1')
  let question = await questions.json()

  return question
}

let questions = await getQuiz()


// Main Component
function App() {

  const [isClicked , changeStart] = useState(true)

  //const [questions , changeQuestion] = useState(questions)

  function handleClick(){
    changeStart(!isClicked)
  }


  return (
    <div className="relative h-screen App bg-bg2">
      {isClicked &&  
      <Intro
       handleClick = {handleClick}/>}

       {!isClicked && <Quiz/>}

      <Design/>

    </div>  
  )
}

export default App

