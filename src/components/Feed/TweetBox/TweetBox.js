import { Button,Avatar } from '@material-ui/core';
import Logo from "../../../images/man.png";
import React, { useState } from 'react';
import "./TweetBox.css";

const TweetBox = () => {
    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage,setTweetMessage] = useState("");
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src={Logo} />
                    <input onChange={(e)=>setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening ? " type="text" />
                   
                </div>
                <input className="tweetbox__imageInput" placeholder="Optional : Enter Image Url" type="text" />
                <Button className="tweetbox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;