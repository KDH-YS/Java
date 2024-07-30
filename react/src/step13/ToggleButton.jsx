import { useState,useEffect } from "react";
export function Toggle(props){
    const[ onAir, setOnAir] = useState(true);
    const[ onAir2, setOnAir2] = useState(true);
    function func1(){
        setOnAir(!onAir);
    }    
    const func2= ()=>{
        setOnAir2(!onAir2);
    }

return(
    <>
    <button onClick={func1}>
    {onAir? "OnAir":"OffAir"}    
    </button>
        <button onClick={func2}>
        {onAir2? "OnAir":"OffAir"}    
        </button>
        </>
);

}