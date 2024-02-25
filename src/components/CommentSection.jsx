import './CommentSection.css'
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";


import React from 'react';
import { useSelector } from 'react-redux';

const CommentSection = ({photoIndex, profileInfo}) => {

  const { titles, items: comments } = useSelector((state) => state.comments);


  return (
    <div className='section-container'>
        <div className="comment-header">
            <img src={profileInfo.profile_picture_url} alt="" />
            <span>{profileInfo.username}</span>
        </div>

        <div className="comments">
            <div className="my-comment">
            <img src={profileInfo.profile_picture_url} alt="" />
            <span>{profileInfo.username}</span>Tecnologias

            {titles[photoIndex].icons.map((Icon, iconIndex) => (
          <span key={iconIndex}>{React.createElement(Icon)} </span>
        ))}

            </div>

            <a href={titles[photoIndex].link}>
            <p>{titles[photoIndex].text} </p>
            <span>- click para acessar o repositório</span>
            </a>
            <p>Propósito - {comments[photoIndex]}</p>
        </div>

        <div className="bottom-section">
            <div className="likes">
              <div className="react-icons">
                <FaRegHeart/>
                <FaRegComment/>
                <FiSend/>
              </div>
              <span>20 Likes</span>
            </div>
            <div className="yourcomment">
              <input type="text" placeholder='Adicione seu comentário...' />
            </div>
        </div>

       
      

    </div>
  )
}

export default CommentSection