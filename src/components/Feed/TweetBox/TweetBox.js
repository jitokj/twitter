import { Button,Avatar } from '@material-ui/core';
import Logo from "../../../images/man.png";
import React from 'react';
import "./TweetBox.css";

const TweetBox = () => {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src={Logo} />
                    <input placeholder="What's happening ? " type="text" />
                    <input placeholder="Enter Image Url" type="text" />
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;