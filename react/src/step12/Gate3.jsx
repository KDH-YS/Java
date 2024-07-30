import { useState, useEffect } from "react";
import { useCounter } from "./useCounter";

export function Gate(){
    const [isFull,setIsFull] = useState(false);
    const [isEmpty,setIsEmpty] = useState(true);
    const [count, increaseCount, decreaseCount] = useCounter(0);    


    useEffect(()=>{
        setIsFull(count >=10);
        setIsEmpty(count<=0);
    },[count]);

    return(
        <>
    <div style={{padding:16}}>
        <p>총 {count}명 수용했습니다.</p>
        <button onClick={increaseCount} disabled={isFull} >입장</button>
        <button onClick={decreaseCount} disabled={isEmpty}>퇴장</button>
        {isFull && <p style={{color:'red'}}>정원이 가득찼습니다.</p>}
        {isEmpty && <p style={{color:'red'}}>정원이 비었습니다.</p>}


    </div>
        </>
    );
}