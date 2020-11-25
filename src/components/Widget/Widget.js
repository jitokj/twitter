import React from 'react';
import "./Widget.css";
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed";

const Widget = () => {
    return (
        <div className="widget">

       <div className="widget__input">
           <SearchIcon className="widget__searchIcon" />
           <input type="text" placeholder="Search Twitter" />
       </div>
       <div className="widget__widgetContainer">
           <h2>What's happening ?</h2>
           <TwitterTweetEmbed tweetId={"1331485043919732736"} />
           <TwitterTimelineEmbed  sourceType="profile" screenName="jitokj" noScrollbar placeholder="Loading....😎" options={{height: 400}} />
           <TwitterShareButton  url={"https://twitter.com/reactjs"} options={{text:"Reactjs is awesome",via:"jitokj"}} />
       </div>
            
        </div>
    );
};

export default Widget;