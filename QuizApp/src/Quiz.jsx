import { useEffect, useState } from "react"

function getRandomNum(){
  let array = Array(4)
  console.log(Math.floor(Math.random() *4))

  for(let i= 0; i < 4 ; i++){
    console.log(1)
    //array.push(Math.floor(Math.random *4))

  }

  //console.log(array)
}



//getRandomNum()

export default function Quiz(props){

let trivia = props.quiz

let questions  = trivia.map(function(element){
  //console.log(element)
  const {question,incorrectAnswers,correctAnswer} = element

  function reshuffleOptions(){
    let array = [...incorrectAnswers , correctAnswer]
    array.forEach(function(element,index){
      // console.log(element)
      // console.log(index)
    })
  }

  reshuffleOptions()

  return (
    <>
    <label className='font-bold'>{question}</label>
      <div className='flex text-xs space-x-4'>
        <input
        type='button'
        value='Adios'
        className='border-[1px] border-deepblue px-4 py-1 rounded-lg'>
        </input>
        <input
        type='button'
        value='Hola'
        className='border-[1px] border-deepblue px-4 py-1 rounded-lg'>
        </input>
        <input
        type='button'
        value='Au Revoir'
        className='border-[1px] border-deepblue px-4 py-1 rounded-lg'>
        </input>
        <input
        type='button'
        value='Salir'
        className='border-[1px] border-deepblue px-4 py-1 rounded-lg'>
        </input>
      </div>
    </>  
  )
 })


    return(
      <form className='quiz font-Karla text-blue'>
        <div className='space-y-2'>
          

        </div>
      </form>
    )
  }
  