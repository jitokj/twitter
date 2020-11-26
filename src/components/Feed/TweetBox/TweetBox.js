import { Button,Avatar } from '@material-ui/core';
import Logo from "../../../images/man.png";
import React, { useState } from 'react';
import "./TweetBox.css";
import db from "../../../firebase";

const TweetBox = () => {
    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage,setTweetImage] = useState("");
    const sendTweet = (e)=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'JITO K J',
            userName: 'jitokj',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://img.icons8.com/ultraviolet/40/000000/select-user.png"

        })
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src={Logo} />
                    <input onChange={(e)=>setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening ? " type="text" />
                   
                </div>
                <input value={tweetImage} onChange={(e)=>setTweetImage(e.target.value)} className="tweetbox__imageInput" placeholder="Optional : Enter Image Url" type="text" />
                <Button type="submit" onClick={sendTweet} className="tweetbox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;