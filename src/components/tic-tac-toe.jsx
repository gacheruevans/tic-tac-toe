import useTicTacToe from '../hooks/tictactoe';

const TicTacToe = () => {

    const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();

  return (
    <div className='game'>
      <div className="status">
        {getStatusMessage()}
        <button className ="reset" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
        {
          board.map((value, index)=>(
            <div 
              className="cell" 
              key={index}
              onClick={() => handleClick(index)}
              disabled={value !== null}
              >
                {value}
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default TicTacToe;
