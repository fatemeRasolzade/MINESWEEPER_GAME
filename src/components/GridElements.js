import React, { useState } from 'react'

const GridElements = ({index,start , setMine, mine, m, mines}) => {

    const firstIndex = mines.filter(f => f[0] === m[0])
    const secondIndex = firstIndex.filter(f => f[1] === m[1])
    const [res, setRes] = useState(false)

    const OnClick = () => {
        if(secondIndex.length !== 0){
            setMine(true)
        }
       setRes(true)
    }

    return (
            <div
                key={index}
                className={mine? 
                    start ?  secondIndex.length !== 0 ? "bg-danger" : "bg-success" : ""
                    :  
                    start ? res === true ? secondIndex.length !== 0 ? "bg-danger" : "bg-success" : "" : ""
                }
                onClick={OnClick}
            >
        </div>

    )
}

export default GridElements
