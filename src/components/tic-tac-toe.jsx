import useTicTacToe from '../hooks/tictactoe';

const TicTacToe = () => {

    const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();

  return (
    <div className='game'>
      <h1 className='title'>Tic <span className='titletext'>Tac</span> Toe</h1>
      <div className="status">
        <span className='statustext'>{getStatusMessage()}</span>
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
      <button className ="reset" onClick={resetGame}>Reset Game</button>
    </div>
  )
}

export default TicTacToe;
