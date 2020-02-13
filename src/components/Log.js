import React, {Component} from 'react';

class Log extends Component {
    constructor(props){
        super(props)
        this.state = {
            numberArray: [],
            randomNumber: randomNumber
        }
    }

    // if(typeOf(randomNumber) === "number"){
    //     listConstructor();
    // }

    listConstructor = () => {
        console.log(this.state.randomNumber);
        let reconstructedNumber = this.state.randomNumber
        let addToArray = []
        addToArray.push(reconstructedNumber)
        this.setState({ numberArray: addToArray });
    }

    render(){
      return (
        <div>
            <button onClick = {this.listConstructor}>Do I work</button>
                {this.state.numberArray}
        </div>
      );
    }
}

export default Log;
