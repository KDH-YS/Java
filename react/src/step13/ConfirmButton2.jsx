import React,{useState} from "react";

function Confirm(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm=()=>{
            setIsConfirmed((previsConfirmed)=> !previsConfirmed);
        };
    
        return(
            <button onClick={handleConfirm}
            disabled={isConfirmed}>
                {isConfirmed? "확인됨":"확인하기"}
            </button>
        );
    
}
export default Confirm;