import React, { Component } from 'react'
import './App.css';

export class App extends Component {

  turns = ['X','O','X','O','X','O','X','O','X'];
  
  constructor(props){
    super(props);
    this.state = {
      square: [ null, null, null, null, null, null, null, null, null ]
    }
  }

  selectSquare(i){
    let markSquare = this.state.square.slice();
    if(markSquare[i] !== null){
    }

    this.updateState(i)
  };

  updateState(props){
    let markSquare = this.state.square.slice();

    markSquare[props] = this.turns.pop()
    this.setState({ square: markSquare }, () => {
    this.checkForWinner(props);
    });
  };

  checkForWinner(props){

    let winCombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    let playerCombo = [ [], [], [], [], [], [], [], []]
      
    for(let i=0; i <= 7; i++){
      let combo = winCombo[i];
      for(let j=0; j <= 2; j++){
        let xo = this.state.square.slice()
          playerCombo[i][j] = xo[combo[j]];
      };
    };

    for(let i=0; i <= 7; i++){
      let x = playerCombo[i]
      if((x[0] || x[1] ||x[2]) !== null ){
        if(x[0] === x[1] && x[1] === x[2]){
          return alert(`${x[0]} is the winner`)
        };
      };
    };
  };

  newGame(){
    window.location.reload(true);
  }

  render() {
    return (
      <div className='App'>
        
        <div className='App-header'> 
        <button className='newGameButton' onClick={() => this.newGame()}>New Game</button>
          <div className='board-row'>
            <button className='square' onClick={()=> this.selectSquare(0)}>{this.state.square[0]}</button>
            <button className='square' onClick={()=> this.selectSquare(1)}>{this.state.square[1]}</button>
            <button className='square' onClick={()=> this.selectSquare(2)}>{this.state.square[2]}</button>
          </div>
          <div className='board-row'>
            <button className='square' onClick={()=> this.selectSquare(3)}>{this.state.square[3]}</button>
            <button className='square' onClick={()=> this.selectSquare(4)}>{this.state.square[4]}</button>
            <button className='square' onClick={()=> this.selectSquare(5)}>{this.state.square[5]}</button>
          </div>
          <div className='board-row'>
            <button className='square' onClick={()=> this.selectSquare(6)}>{this.state.square[6]}</button>
            <button className='square' onClick={()=> this.selectSquare(7)}>{this.state.square[7]}</button>
            <button className='square' onClick={()=> this.selectSquare(8)}>{this.state.square[8]}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
