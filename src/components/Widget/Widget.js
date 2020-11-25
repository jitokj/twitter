import React from 'react';
import "./Widget.css";
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed";

const Widget = () => {
    return (
        <div className="widget">

       <div className="widget-input">
           <SearchIcon className="widget__searchIcon" />
           <input type="text" placeholder="Search Twitter" />
       </div>
       <div className="widget__widgetContainer">
           <h2>What's happening ?</h2>
           <TwitterTweetEmbed tweetId={"858551177860055040"} />
       </div>
            
        </div>
    );
};

export default Widget;