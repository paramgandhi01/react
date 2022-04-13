import React,{useState} from 'react'

export default function Functioncounter2()
{
const initial=0
    const[count,setCount]=useState(initial)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count<=0){

            setCount(initial)
        }
        else{
            setCount(count-1)
        }
    }
    const reset=()=>{
        setCount(initial)
    }
    return (
        <div>
            count:{count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
