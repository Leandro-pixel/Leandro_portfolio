import { Link } from "react-router-dom"

import { BsHouse } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";

import './Navbar.css'


const Navbar = ({profilePhoto}) => {
  return (
    <div className="navbar">

        <h2>
            <Link to={"/"} className="nav-home">Instagram</Link>
        </h2>

                <div className="house-div">
                <Link to={`/`} className="house">
                    <div className="nav-icons"><BsHouse/></div>
                     <span>Home</span>
                </Link>
                </div>
                
                
             <a href="https://www.linkedin.com/in/leandro-soares-neves">
             <div className="nav-icons"><LuLinkedin/></div>
                <span>Linkedin</span>
                </a>
          
                <a href="https://github.com/Leandro-pixel">
                <div className="nav-icons"><FiGithub/> </div>
                    <span>GitHub</span>
                    </a>
                
           
                <a href="https://api.whatsapp.com/send?phone=5515981104092&text=">
                    <div className="nav-icons"><BsWhatsapp/></div>
                    <span>Whatsapp</span>
                    </a>
            
                <Link to={`/Dm`}>
                    <div className="nav-icons"><BsMessenger/> </div>
                    <span>Message me</span>
                </Link>
                
            <div className="technologies">
                <div className="nav-title">
                <img src={profilePhoto} alt="" className="profile-image"/> 
                <span>Habilidades:</span>
                </div>
            
                <span>JavaScript | CSS | HTML </span>
                <span>React | Nextjs | Jest </span>
                <span> GraphQL | Apollo | Typescript </span>
                <span> Tailwind | ZOD</span>
            </div>
                
    </div>
  )
}

export default Navbar