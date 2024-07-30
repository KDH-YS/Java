import { useState, useEffect } from "react";
export function UnmountComp(){
    const[mounted,setMounted] = useState(true);
    useEffect(()=>{
        console.log('컴퍼넌트 마운팅됨');
        return()=>{
            console.log('컴퍼넌트 언마운팅전');
        }
    },[]);
    const Dounmounting = () =>{
        setMounted(false);
    };
    if(mounted){
        return <div>컴퍼넌트가 마운팅됨<button onClick={Dounmounting}>Unmount</button></div>
    }else{
        return(        
<div>컴퍼넌트가 언 마운팅됨</div>
        );
    }
    

    
}