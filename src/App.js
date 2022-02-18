import React from 'react'; 
import Tweet from './Tweet';
import "./App.css";


function App(){

  return(
    <div className="app">
      <Tweet name="Dev ED" message="Hello today" likes="122"/>
      <Tweet name="naruto" message="tomorrow is good" likes="14444" />
      <Tweet name="One piece" message="Happy new yeary" likes="13252"/>
      <Tweet name="bleach" message="Heeeell noooo" likes="56122"/>

    </div>
  ) 
}

export default App;