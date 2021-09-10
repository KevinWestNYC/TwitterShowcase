import React from 'react'
import heart from './heart.jpg'
import retweet from './retweet.jpg'
import comment from './comment.jpg'
import verified from './twitterverified.jpg'

export default function TweetCard() {
    return (
        <div className="container">
            <div id="tweet-card" className="row" >
                <div className="col-1">
                    <p>photo</p>
                </div>
                <div className="col-10">
                    <div className="row">
                        <p id="twitter-body">
                            <span id="twitter-name">Matt Barrows <img src={verified}/></span>
                            <span> </span>
                            <span className="grey">@mattbarrows </span>
                            <span className="grey">∙ 19h</span>
                        
                        </p>
                    </div>
                    <div className="row">
                        <p>Trey Lance will win rookie of the year.</p>
                    </div>
                    <div className="row">
                        <p>
                        <span className="icon"><img src={comment}/> 2 </span>
                        <span className="icon"><img src={retweet}/> 3 </span>
                        <span className="icon"><img src={heart}/> 4 </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
