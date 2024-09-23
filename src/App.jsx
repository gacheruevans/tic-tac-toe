import { useState, useRef } from 'react';
import './App.css';

const initialBoard = Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  let [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (e,index) => {
    if(lock || board[index]) return;
    
    const newData = [...board];
    newData[index] = count % 2 === 0 ? 'X' : 'O';
    setBoard(newData);
    setCount(++count);    
    
    checkWin(newData);
  };

  const checkWin = (newData) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if(newData[a] && newData[a] === newData[b] && newData[a] === newData[c]){
          won(newData[a]);
          return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    titleRef.current.innerHTML = `Congratulations:  ${winner === 'x' ? 'X' : 'O'}`;
  };

  const reset = () => {
    setLock(false);
    setBoard(initialBoard);
    setCount(0);
    titleRef.current.innerHTML = 'Tic Tac Toe In <span>React</span>';
  };

  return (
    <>
      <h1>Tic Tac Toe Game</h1>
      <div className="status">
        {titleRef}
      </div>
      <div className="board">
        {
          board.map((value, index)=>(
            <div 
              className="cell" 
              key={index} 
              onClick={toggle}>
                {value && value === 'x' ? 'X' : 'O'}
              </div>
          ))
        }
      </div>
       <button className ="reset" onClick={reset}>Reset Game</button>
    </>
  )
}

export default App
