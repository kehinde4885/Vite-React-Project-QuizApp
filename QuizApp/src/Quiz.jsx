import { useEffect, useState } from "react"

export default function Quiz(props){

 console.log(props.quiz[0])


    return(
      <div className='quiz font-Karla text-blue'>
        <div className='space-y-2'>
          <p className='font-bold'>{props.quiz[0].question}</p>
          <div className='flex text-xs space-x-4'>
            <button
            className='border-[1px] border-deepblue px-4 py-1 rounded-lg'>
              Adios
            </button>
            <button 
            className='border-[1px] border-deepblue px-4 py-1 rounded-lg'>
              Hola
            </button>
            <button 
            className='border-[1px] border-deepblue px-4 py-1 rounded-lg'>
              Au Revoir
            </button>
            <button 
            className='border-[1px] border-deepblue px-4 py-1 rounded-lg'>
              Salir
            </button>
          </div>
        </div>
      </div>
    )
  }
  