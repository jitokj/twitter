import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import Logo from "../../../images/man.png";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({displayName,userName,verified,text,image,avatar}) => {
    return (
        <div className="post">
           <div className="post__avatar">
               <Avatar src={Logo} />
           </div>
           <div className="post__body">
               <div className="post__header">
                   <div className="post__headerText">
                       <h3>jito {" "}<span className="post__headerSpecial">
                           <VerifiedUserIcon className="post__badge" /> @jitokj
                       </span></h3>
                   </div>
                   <div className="post__headerDescription"><p>This is a twitter clone</p></div>
               </div>
               <img src="https://media.giphy.com/media/dhz1gKi7WKWpW/giphy.gif" alt=""/>
               <div className="post__footer">
                   <ChatBubbleOutlineIcon fontSize="small" />
                   <RepeatIcon fontSize="small" />
                   <FavoriteBorderIcon fontSize="small" />
                   <PublishIcon fontSize="small" />
               </div>
           </div>
        </div>
    );
};

export default Post;