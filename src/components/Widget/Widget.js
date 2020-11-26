import React from 'react';
import "./Widget.css";
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed";

const Widget = () => {
  
    const tweetsID = ["1330203008836247558","1331485043919732736",
    "1330968411648692225","1329442926376710150","1331634142707007489"];
    const screenID = ["BBCEarth","manoramanews","NatGeo","AnimalPlanet","washingtonpost"];
    return (
        <div className="widget">

       <div className="widget__input">
           <SearchIcon className="widget__searchIcon" />
           <input type="text" placeholder="Search Twitter" />
       </div>
       <div className="widget__widgetContainer">
           <h2>What's happening ?</h2>
           <TwitterTweetEmbed tweetId={tweetsID[Math.floor(Math.random() * tweetsID.length)]} options={{height: 300}} />
           <TwitterTimelineEmbed  sourceType="profile"
            screenName={screenID[Math.floor(Math.random() * screenID.length)]} noScrollbar placeholder="Loading....😎" options={{height: 300}} />
           <TwitterShareButton  url={"https://twitter.com/reactjs"} options={{text:"Reactjs is awesome",via:"jitokj"}} />
       </div>
            
        </div>
    );
};

export default Widget;
 


