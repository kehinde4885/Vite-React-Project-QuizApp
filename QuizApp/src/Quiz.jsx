import { useEffect, useState } from "react"

function getRandomNum(){
  return Math.floor(Math.random() *4)

}



export default function Quiz(props){

let trivia = props.quiz

//console.log(trivia)


let questions  = trivia.map(function(element){

  const {question,incorrectAnswers,correctAnswer,id} = element

  let num = getRandomNum()

  let options = [...incorrectAnswers]

  options.splice(num,0,correctAnswer)

  
  let optionsArray = options.map(function(element,index,array){
    //console.log(correctAnswer)

    //console.log(element,index,array)
    return (
      <input 
        key={index}
        type='button'
        value={element}
        className='border-[1px]  border-deepblue px-4 py-1 rounded-lg'>
      </input> 
    )
  })

  return (
    <div key={id}>
      <p className="font-bold">{question}</p>
      <div className='flex text-xs space-x-4'>
        {optionsArray}
       
        
      </div>
    </div>  
  )
})


    return(
      <form className='quiz font-Karla text-blue'>
        <div className='space-y-4'>
          {questions}
        </div>
      </form>
    )
  }

  