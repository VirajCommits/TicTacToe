
import React,{useEffect,useState} from 'react'
import "./TicTacToe.css"

const TicTacToe = () => {
const [turn, setTurn] = useState('X')
const [cells, setCells] = useState(Array(9).fill(''))
const [winner, setWinner] = useState('')

const checkForWinners = (squares) => {
    let combos = {
        across:[
            [0,1,2],
            [3,4,5],
            [6,7,8]
        ],
        down:[[0,3,6],
              [1,4,7],
              [2,5,8]
        ],
        diagonal:[[0,4,8],
                  [2,4,6]
                ]
    }  
    for(let combo in combos){
        combos[combo].forEach((pattern) => {
            if((squares[pattern[0]] === '') ||
               (squares[pattern[1]] === '') || 
               (squares[pattern[2]] === '')){

               }
            else if (squares[pattern[0]] === squares[pattern[1]] && 
                     squares[pattern[1]] === squares[pattern[2]]){
                        setWinner(squares[pattern[0]])
            }

        });
    }
}
const handleClick = (num) => {
    let squares = [...cells];
    if(squares[num] == ''){
        if (turn == 'X'){
            squares[num] = 'X'
            setTurn('O')
        }
        else{
            squares[num] = 'O'
            setTurn('X')
        }
    }
    setCells(squares)
    checkForWinners(squares)
}


const Cell =({num}) => {
    return <td onClick={() => handleClick(num)}>
        {cells[num]}
    </td>
}
const restartGame = () =>{
    setCells(Array(9).fill(''))
    setWinner('')
    setTurn('X')
    
}
  return (
    <>
    <div className='container'>
        <table>
            Turn's : {turn}
            <tbody>
                <tr>
                    <Cell num= {0}/>
                    <Cell num= {1}/>
                    <Cell num= {2}/>
                </tr>
                <tr>
                    <Cell num= {3}/>
                    <Cell num= {4}/>
                    <Cell num= {5}/>
                </tr>
                <tr>
                    <Cell num= {6}/>
                    <Cell num= {7}/>
                    <Cell num= {8}/>
                </tr>
            </tbody>
        </table>

        
        
    </div>
    
    <div className="w_st">
        {winner && (
            <>
            <p className='display_name'>{winner} is the Winner!</p>
            <button onClick={() => restartGame()} className="playbtn">Play Again</button>
            </>
        )}
        </div>
    </>
  )
}

export default TicTacToe