import React from 'react'

export default function TwitterSearch() {
    return (
        <div className="container" >
            <h1 className="page-title">Search</h1>
            <div className="row">
                <div className="col-4">
                    <h2>My Stream</h2>
                    <ul>
                        <li>@mattbarrows x</li>
                        <li>@49erswebzone x</li>
                        <li>@grantcohn x</li>
                        <li>@LombardiHimself x</li>
                        <li>@NBCS49ers x</li>
                        <li>@MaioccoNBCS x</li>
                        <li>@Eric_Branch x</li>
                        <li>@CamInman x</li>
                        <li>@TheNinersWire x</li>
                    </ul>
                </div>
                <div className="col-6">
                    <div className="row">
                        <p>Search by name, content or hashtag</p>
                        <input></input>
                    </div>
                    <br />
                    <div className="row">
                        Search Results
                    </div>
                    
                </div>
                <div className="col-2">

                </div>
            </div>
        
        </div>
    )
}
