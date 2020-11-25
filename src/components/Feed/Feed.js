import React from 'react';
import "./Feed.css";
import Post from './Post/Post';
import TweetBox from './TweetBox/TweetBox';
import Logo from "../../images/man.png";

const Feed = () => {
    return (
        <div className="feed">
           {/* Header */}
           <div className="feed__header">
           <h2>Home</h2>
           </div>
           
            {/* tweetBox */}
                <TweetBox />
            {/* Post */}
            <Post displayName= "jito" userName="jitokj"
             verified text= "🚀 yaah!!!!" avatar ={Logo} image={"https://media.giphy.com/media/dhz1gKi7WKWpW/giphy.gif"} />
             <Post displayName= "jito" userName="jitokj"
             verified text= "🚀 yaah!!!!" avatar ={Logo} image={"https://media.giphy.com/media/dhz1gKi7WKWpW/giphy.gif"} />
              <Post displayName= "jito" userName="jitokj"
             verified text= "🚀 yaah!!!!" avatar ={Logo} image={"https://media.giphy.com/media/dhz1gKi7WKWpW/giphy.gif"} />
        </div>
    );
};

export default Feed;