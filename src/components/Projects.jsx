

import { useState, useEffect } from 'react'
import './Projects.css'

//importação das imagens
import album from '../assets/album.png'
import blog from '../assets/blog.png'
import Carousel from '../assets/Carousel.png'
import Conversordemoedas from '../assets/Conversordemoedas.png'
import cronometro from '../assets/cronometro.png'
import GitFinder from '../assets/GitFinder.png'
import IMCCalculator from '../assets/IMCCalculator.png'
import Markdown from '../assets/Markdown.png'
import MemoryGame from '../assets/MemoryGame.png'
import MultistepForm from '../assets/MultistepForm.png'
import pomodoro from '../assets/pomodoro.png'
import ReactHookForm from '../assets/ReactHookForm.png'
import Subscribe from '../assets/Subscribe.png'
import tipCalculator from '../assets/tipCalculator.png'
import ToDoList from '../assets/ToDoList.png'
import UsersTable from '../assets/UsersTable.png'
import Weather from '../assets/Weather.png'
import CommentSection from './CommentSection'


const imagesArray = [
 album, 
 blog,
 Carousel,
 Conversordemoedas,
 cronometro,
 GitFinder,
 IMCCalculator,
 Markdown,
 MemoryGame,
 MultistepForm,
 pomodoro,
 ReactHookForm,
 Subscribe,
 tipCalculator,
 ToDoList,
 UsersTable,
 Weather
]



const Projects = ({profileInfo}) => {

  const [photoModal, setPhotoModal] = useState(null)



    const handleClick = (index) => {
        setPhotoModal(index)
    }

    useEffect(() => {
        
      }, [])

  return (
    <div className='projects'>
        {imagesArray.map((imagem, index) => (
        <div key={index} className="image">
          <img 
          src={imagem} 
          alt={`Album ${index + 1}`} 
          onClick={() => handleClick(index)}
        />
        </div>
      ))}

    {photoModal != null &&(
        <div className='enlarged-photo-backdrop' 
        onClick={() => setPhotoModal(null)}
        >
            <div className='enlarged-photo-container'>
            
            <img src={imagesArray[photoModal]} className='modal'>
            </img>
           
            
            </div>
            <div className="descriptionModal">
                <CommentSection photoIndex={photoModal} profileInfo={profileInfo}/>
              
            </div>
            
            
      
        </div>
    )}
      
    
    </div>
  )
}

export default Projects