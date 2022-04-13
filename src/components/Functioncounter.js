import React,{useState} from 'react'

export default function Functioncounter() {
const[count,setCount]=useState(0)
function increment(){
    setCount(
        count+1
    )
}
    return (
        <div>
            <button onClick={increment}>count{count}</button>
        </div>
    )
}
