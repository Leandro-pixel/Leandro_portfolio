import { useState,useEffect } from "react";
import Navbar from "../components/Navbar"
import { PiProjectorScreen } from "react-icons/pi";
import { BsCameraReels } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

import { Link } from "react-router-dom";
import './Home.css'

import axios from 'axios'
import Projects from "../components/Projects";
import Gifs from "../components/Gifs";
import About from "../components/About";


const Home = () => {


  const [profileInfo, setProfileInfo] = useState([]);
  const [mediaUrls, setMediaUrls] = useState([]);
  const [feedChange, setFeedChange] = useState(0);

  const token = import.meta.env.VITE_INSTA_TOKEN;

  
  const fields = "username, followers_count, follows_count, media_count, profile_picture_url,biography,name,media"

  const url = `https://graph.facebook.com/v19.0/17841408864942046?fields=${fields}&access_token=${token}`;


 const getInstaFeed = async() => {

  try {

    const response = await axios.get(url)

    const mediaIDs = response.data.media.data;
    const data = response.data;

    const media_Urls = await Promise.all(
      mediaIDs.map(async (mediaID) => {
        const mediaUrl = `https://graph.facebook.com/v19.0/${mediaID.id}?fields=media_url&access_token=${token}`;
        const mediaResponse = await axios.get(mediaUrl);
        return mediaResponse.data.media_url;
      })
    );

    
    setMediaUrls(media_Urls)
    setProfileInfo(data)   

  } catch (error) {
    console.log(error)
  }
 
  }

  const handleClick = (index) => {
    setFeedChange(index);
  };

  useEffect(() => {
    getInstaFeed();
    setFeedChange(1);
  }, [])

 


  return (
    <div className="home">
      <nav>
      <Navbar profilePhoto={profileInfo.profile_picture_url}/>
      </nav>
      
      <div className="content">
        <header>
          <img src={profileInfo.profile_picture_url} alt="profile Photo" />
          <div className="navheader">
            <div className="user">

            {profileInfo && (
              <span>{(profileInfo.username)}</span>
            )}
              <button className="follow"><a href="https://www.instagram.com/leandro.mgrc/">Follow</a></button>
              <Link to={`/Dm`}>
              <button>Message</button>
              </Link>
              <button>Edit Profile</button>

            </div>

            <div className="stats">
              <span>
                <span className="counts">
                  {profileInfo.media_count}
                </span> posts  
                </span>

              <span> 
                <span className="counts">
                {profileInfo.followers_count}
                  </span> followers
                  
                  </span>

              <span>
                <span className="counts">
                  {profileInfo.follows_count}
                  </span> following
                  </span>
            </div>
            <div className="description">
              <span className="profile-name">{profileInfo.name}</span>
              <span>
                <a href="https://www.instagram.com/mgrc.official/">
                  {profileInfo.biography}
                </a>
                </span>
            </div>
          </div>
        </header>

        <div className="highlights">
          <div>
          <img src={mediaUrls[2]} alt="" />
          <span>Banda</span>
          </div>  
        </div>

        <div className="feed">

          <div className="posts">

            <div className="feed-content">

              <div 
              className={feedChange === 1 ? "indicator active":"indicator"}
              onClick={() => handleClick(1)}
              >
               <PiProjectorScreen/> PROJETOS
                </div>

              <div 
              className={feedChange === 2 ? "indicator active":"indicator"}
              onClick={() => handleClick(2)}
              >
               <BsCameraReels/> GIFS
                </div>

              <div 
              className={feedChange === 3 ? "indicator active":"indicator"}
              onClick={() => handleClick(3)}
              >
               <CgDetailsMore/> ABOUT
                </div>
           
            </div>
            
          {feedChange === 1 && <Projects profileInfo={profileInfo}/>}
          {feedChange === 2 && <Gifs/>}
          {feedChange === 3 && <About/>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home