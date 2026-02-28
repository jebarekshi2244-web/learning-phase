import React from 'react'
import {useState} from 'react'
import './Counter.css'


    const Counter=()=>{
        
        const [count,setCount]=useState(true);
        function change(){
            setCount(!count)
            console.log(count)
        }
        return (
            <div className='Counter'>
                <h1>{count? "true" :"false"}</h1>
            <div className={count?"box-white":"box-black"}></div>
            
            <button onClick={change}className='btn_counter'>Dark/White</button>
            </div>
        )
    
}
export default Counter