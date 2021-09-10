import React from 'react'
import tweet1 from './images/tweet1.jpg'
import tweet2 from './images/tweet2.jpg'
import tweet3 from './images/tweet3.jpg'
import ninersSched from './images/49ersSched.jpg'
import TweetCard from './components/TweetCard';


export default function TwitterLive() {
    return (
        <div className="contanier">
            <h1 className="page-title">Live</h1>
            <div className="row">
                <div className="col-3">
                    <h2>Schedule</h2>
                    <img src={ninersSched} />
                </div>
                <div className="col-5">
                    <h2>Tweets</h2>
                    <ul>
                        <li>
                            <img src={tweet1} alt="tweet1" />
                        </li>
                        <li>
                            <img src={tweet2} alt="tweet2" />
                        </li>
                        <li>
                            <img src={tweet3} alt="tweet3" />
                        </li>
                        <li>
                            <TweetCard />
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h2>Game Stats</h2>
                </div>
            </div>
        </div>
    )
}
