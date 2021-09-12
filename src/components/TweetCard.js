import React from 'react'
import heart from './heart.jpg'
import retweet from './retweet.jpg'
import comment from './comment.jpg'
import verified from './twitterverified.jpg'

export default function TweetCard() {
    return (
        //clicking the tweet will send you to tweet on twitter site 
        <div className="container">
            <div id="tweet-card" className="row" >
                <div className="col-1">
                    <p id="profile-photo">photo</p>
                </div>
                <div id="tweet-body" className="col-11">
                    <div id="twitter-name" className="row">
                        <p>
                            <span id="bold-name">Matt Barrows <img src={verified}/></span>
                            <span> </span>
                            <span className="grey">@mattbarrows </span>
                            <span className="grey">∙ 19h</span>
                        
                        </p>
                    </div>
                    <div className="row">
                        <p>Kevin Givens (groin, hip) and Javon Kinlaw (knee) were both in uniform during today's stretch, 
                            though Kinlaw went off to a side field before practice began. Emmanuel Moseley (knee) did not 
                            appear to be practicing. The same for Jalen Hurd (knee),</p>
                    </div>
                    <div className="row">
                        <p id="icon-bar">
                        <span className="icon"><img className="icon-image"src={comment}/> 2 </span>
                        <span className="icon"><img className="icon-image"src={retweet}/> 3 </span>
                        <span className="icon"><img className="icon-image"src={heart}/> 4 </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
