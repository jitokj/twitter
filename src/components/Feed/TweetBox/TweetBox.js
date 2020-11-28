import { Button,Avatar } from '@material-ui/core';
import Logo from "../../../images/man.jpg";
import React, { useState } from 'react';
import "./TweetBox.css";
import db from "../../../firebase";
import {useStateValue} from "../../../provider/StateProvider";

const TweetBox = () => {
    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage,setTweetImage] = useState("");
    const [{photoUrl,token,displayName}] = useStateValue();
    console.log("displayName>>",displayName);
    console.log("photo>>",photoUrl);
    const sendTweet = (e)=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: displayName,
            userName: displayName,
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: photoUrl

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