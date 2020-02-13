import React, {Component} from 'react';
import './App.css';
import Dice from './components/Dice';
import Log from './components/Log';

class App extends Component {
    render(){
      return (
        <div>
        <Dice />
        </div>
      );
    }
}

export default App;
