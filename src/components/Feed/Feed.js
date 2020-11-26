import React, { useEffect, useState } from 'react';
import "./Feed.css";
import Post from './Post/Post';
import TweetBox from './TweetBox/TweetBox';
import db from "../../firebase";
import FlipMove from "react-flip-move";
import Sparkle from "../../images/sparkles.png";

const Feed = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
            db.collection('posts').onSnapshot(snapshot=>(
                setPosts(snapshot.docs.map(doc=>{
                   let newdata = doc.data();
                   newdata.id = doc.id;
                    return newdata}))
            ))
    },[])
    return (
        <div className="feed">
           {/* Header */}
           <div className="feed__header">
           <h2>Home</h2>
           <img src={Sparkle} alt=""/>
           </div>
           
            {/* tweetBox */}
                <TweetBox />
            {/* Post */}
            <FlipMove easing="cubic-bezier(1, 0, 0, 1)" 
             enterAnimation="accordionVertical" leaveAnimation="accordionVertical" >
        {posts.map(post=>(
            <Post key={post.id} displayName={post.displayName} userName={post.userName}
             avatar={post.avatar} verified={post.verified} image={post.image} text={post.text} />
        )).reverse()}
        </FlipMove>
        </div>
    );
};

export default Feed;

