import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/TwitterShowcase'>Twitter Showcase</Link></li> 
          <li><Link to='/TwitterHighlights'>Twitter Highlights</Link></li>   
        </ul>
    )
}
