import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import Logo from "../../../images/man.png";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({displayName,userName,verified,text,image,avatarsrc}) => {
    return (
        <div className="post">
           <div className="post__avatar">
               <Avatar src={Logo} />
           </div>
           <div className="post__body">
               <div className="post__header">
                   <div className="post__headerText">
                       <h3>jito {" "}<span>
                           <VerifiedUserIcon className="post__badge" />
                       </span></h3>
                   </div>
                   <div className="post__headerDescription"><p>This is a twitter clone</p></div>
               </div>
               <img src="" alt=""/>
               <div className="post__footer">
                   <ChatBubbleOutlineIcon fontsize="small" />
                   <RepeatIcon fontsize="small" />
                   <FavoriteBorderIcon fontsize="small" />
                   <PublishIcon fontsize="small" />
               </div>
           </div>
        </div>
    );
};

export default Post;