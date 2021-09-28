import React, { useEffect, useState } from 'react'
import GridElements from './components/GridElements'

const array = () => {
    const arr = []
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const index = [i,j]
            arr.push(index)
        }
    }
    return arr
}

const minesArray = () => {
    const arr = []
    for (let i = 0; i < 10; i++) {
        let maine = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)]
        // const firstIndex = arr.filter(f => f[0] === maine[0])
        // const secondIndex = firstIndex.filter(f => f[1] === maine[1])
        // if(!secondIndex){
            arr.push(maine)
        // }else{
            // i--
        // }
    }
    return arr
}
 
const App = () => {

    const [matrix, setMatrix] = useState(array)
    const [mines, setMines] = useState(minesArray)
    const [mine, setMine] = useState(false)
    const [start, setStart] = useState(false)

    const handleStart = () => {
        setStart(true)
    }
   
    return (
        <div className="App">
            <div className="game-box">
                <div class="grid-container" onClick={handleStart}>
                {matrix.map((m, index) => (
                    <GridElements index={index} start={start} mine={mine} setMine={setMine} m={m} mines={mines}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default App
