import { useState,useEffect } from "react";
export function Toggle(props){
    const[ onAir, setOnAir] = useState(true);
    const[ onAir2, setOnAir2] = useState(false);
    const[ onAir3, setOnAir3] = useState(false);
    function func(event,mode){
        console.log(mode, '==>',event.target,event.target.textContent);
        // setOnAir(!onAir);
        if(mode==1){
            if(event.target.textContent=='OnAir'){
                setOnAir(false);
            } else{
                setOnAir(true);
            }
        } else if(mode==2){
            if(event.target.textContent=='OnAir'){
                setOnAir2(false);
            } else{
                setOnAir2(true);
            }
        } else if(mode==3){
            if(event.target.textContent=='OnAir'){
                setOnAir3(false);
            } else{
                setOnAir3(true);
            } 
        }
    }    

return(
    <>
        <button onClick={(event)=>func(event,1)}>
        {onAir? "OnAir":"OffAir"}    
        </button>
        <button onClick={(event)=>func(event,2)}>
        {onAir2? "OnAir":"OffAir"}    
        </button>
        <p onClick={(event)=>func(event,3)}>
        {onAir3? "OnAir":"OffAir"}    
        </p>
        </>
);

}