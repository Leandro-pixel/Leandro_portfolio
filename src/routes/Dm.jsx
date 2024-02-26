import './Dm.css'

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { BsInstagram } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";

import { useSelector } from 'react-redux';

import {useForms} from "../hooks/useForms";
import emailjs from '@emailjs/browser'


const Dm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(0)

 

  const profilePhoto = useSelector((state) => state.comments.profilePhoto);
  
  const {register, handleSubmit, errors} = useForms();

  const onSubmit = async (data) => {

    const templateParams = {
      form_name: data.name,
      message: data.message,
      email: data.email
    }

    try {
      const response = await emailjs.send("service_g51cbtm", "template_j7yk21u", templateParams,"84kJ-Ek7pU4LxRNDm");

      setName("")
      setEmail("")
      setMessage("")
      setSent(1)
    } catch (error) {
      console.log("error:", error)
      alert("Erro ao enviar")
    }

  }

  return (
    <div className='dm-container'>
      <div className='dm-nav'>
        <div className="instaHome">
          <Link to={"/"}>
          <BsInstagram/>
          </Link>
        </div>
        
        <a href="https://www.linkedin.com/in/leandro-soares-neves"><LuLinkedin/></a>
        <a href="https://github.com/Leandro-pixel"><FiGithub/></a>
        <a href="https://api.whatsapp.com/send?phone=5515981104092&text="><BsWhatsapp/></a>
        <a href="#"><BsMessenger/></a>
        <div className="dm-photo">
        <Link to={"/"}>
          <img src={profilePhoto} alt="profile photo" className='dm-profilePhoto' />
        </Link>
        </div>
        
      </div>
      <div className='dm-message-conatiner'>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='dm-forms'>

          
          <div className="dm-email">
            <div className="greetins">
              Me envie um E-mail!
              
            </div>
            <p>Primeiro insira seus dados abaixo:</p>
          <div>
          <label htmlFor="name">Nome:</label>
          <input 
          type="text" 
          name="name" 
          id='name' 
          {...register("name")}
          placeholder='Digite seu nome'
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
          {errors.name && <small>{errors.name.message}</small>}
          </div>

          <div>
          <label htmlFor="email">E-mail:</label>
          <input 
          type="text" 
          name="email" 
          id='email' 
          {...register("email")}
          placeholder='Digite seu E-mail'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
          {errors.email && <small>{errors.email.message}</small>}
          </div>
          </div>

          <div className='dm-message'>


            <div className="dm-header">
              <img src={profilePhoto} alt="imagem aqui" />
              <span>Leandro Soares Neves</span>
            </div>

            <div className="dm-content">
              {sent > 0 && (
            <div className='message-photo-container'>
              <img src={profilePhoto} alt="profile photo" className='message-photo' />
              <span>Obrigado pela mensagem! Ja recebi seu e-mail e responderei em breve.</span>
            </div>
              )}
            </div>

            <div className="dm-sendMessage">

              <div className='sendmessage-wrap'>
              <textarea 
                name="message" 
                id="message" 
                {...register("message")} 
                placeholder='Deixe sua menssagem'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                ></textarea>

                <button type='submit'>Enviar</button>
              </div>
                
          
              {errors.message && <small>{errors.message.message}</small>}

              
            </div>
            
      </div>

        </form>
      </div>
      
    </div>
    
  )
}

export default Dm