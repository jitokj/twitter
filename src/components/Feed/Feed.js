import React, { useEffect, useState } from 'react';
import "./Feed.css";
import Post from './Post/Post';
import TweetBox from './TweetBox/TweetBox';
import db from "../../firebase";

const Feed = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
            db.collection('posts').onSnapshot(snapshot=>(
                setPosts(snapshot.docs.map(doc=>doc.data()))
            ))
    },[])
    return (
        <div className="feed">
           {/* Header */}
           <div className="feed__header">
           <h2>Home</h2>
           </div>
           
            {/* tweetBox */}
                <TweetBox />
            {/* Post */}
        {posts.map(post=>(
            <Post key={`${post.displayName}-${post.userName}`} displayName={post.displayName} userName={post.userName}
             avatar={post.avatar} verified={post.verified} image={post.image} text={post.text} />
        ))}
        </div>
    );
};

export default Feed;

