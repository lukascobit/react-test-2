import React, {useState} from 'react';

const CountButton = () =>{

    let [counter, setCounter ] = useState(0)

    const handleClick = () =>{
        setCounter(counter++)
    }

    return (
        <div>
            <button onClick={handleClick}>+1</button>
            <div>{counter}</div>
        </div>
    )
}

export default CountButton