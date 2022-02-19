import React from 'react'; 
import "./App.css";
import Button from './components/Button';
import Input from './components/Input';

function App(){


  return(
    <div className="app">
      <Button text={'Add video'} />
      <Input type={"text"} id={'id1'} name={'name'} label={'Email'} />
      <a href="/oucouc">oussama</a>
      <h1>Hello  there !</h1>
    </div>
  ) 
}

export default App;