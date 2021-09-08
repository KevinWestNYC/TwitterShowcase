import './style.css';
import React from 'react'
import { Route } from 'react-router';
import Home from "./Home"
import TwitterShowcase from "./TwitterShowcase"
import TwitterHighlights from "./TwitterHighlights"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/TwitterShowcase" component={TwitterShowcase} />
      <Route exact path="/TwitterHighlights" component={TwitterHighlights} />
      
    </div>
  )
}

