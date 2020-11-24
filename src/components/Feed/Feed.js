import React from 'react';
import "./Feed.css";
import Post from './Post/Post';
import TweetBox from './TweetBox/TweetBox';

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
            <Post />
        </div>
    );
};

export default Feed;