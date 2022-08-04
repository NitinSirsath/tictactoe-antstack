import React , {useState} from 'react'
import Square from './Square'
import style from '../styles/board.module.css'

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    

    const handleClick = i => {
        console.log(squares[i]);
        if(!squares[i]){
            squares[i] = isX? "X" : 'O'
            setSquares(squares)
            setIsX(preV => !preV)
            console.log(squares[i], i,'after');
      }
    }

  return (
    <div>
        <div className={style.board_wrapper}>
        <Square value={squares[0]} onClick={() => handleClick(0)}/>
        <Square value={squares[1]} onClick={() => handleClick(1)}/>
        <Square value={squares[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className={style.board_wrapper}>
        <Square value={squares[3]} onClick={() => handleClick(3)}/>
        <Square value={squares[4]} onClick={() => handleClick(4)}/>
        <Square value={squares[5]} onClick ={() => handleClick(5)}/>
        </div>
        <div className={style.board_wrapper}>
        <Square value={squares[6]} onClick={() => handleClick(6)}/>
        <Square value={squares[7]} onClick={() => handleClick(7)}/>
        <Square value={squares[8]} onClick={() => handleClick(8)}/>
        </div>
    </div>
  )
}

export default Board