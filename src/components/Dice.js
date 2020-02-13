import React, {Component} from 'react';
import dice1 from '../pictures/Die1.png'
import dice2 from '../pictures/Die2.png'
import dice3 from '../pictures/Die3.png'
import dice4 from '../pictures/Die4.png'
import dice5 from '../pictures/Die5.png'
import dice6 from '../pictures/Die6.png'
import Log from './Log'

class Dice extends Component {
    constructor(){
        super()
        this.state = {
            rollerValue: 0,
            diceImage: dice1
        }

    }

    rollTheDice = () => {
        let randomNumber = Math.floor(Math.random()*6);

        switch (randomNumber) {
            case 0:
                this.setState({ diceImage: dice1 })
                this.setState({ rollerValue: 0})
                break;
            case 1:
                this.setState({ diceImage: dice2 })
                this.setState({ rollerValue: 1})
                break;
            case 2:
                this.setState({ diceImage: dice3 })
                this.setState({ rollerValue: 2})
                break;
            case 3:
                this.setState({ diceImage: dice4 })
                this.setState({ rollerValue: 3})
                break;
            case 4:
                this.setState({ diceImage: dice5 })
                this.setState({ rollerValue: 4})
                break;
            case 5:
                this.setState({ diceImage: dice6 })
                this.setState({ rollerValue: 5})
                break;
        }
    }

    render(){
      return (
        <div>
            <p onClick={this.rollTheDice}>
                <img src={this.state.diceImage}></img>
            </p>
            <Log
            randomNumber = {this.state.rollerValue}
            />
        </div>
      );
    }
}

export default Dice;
