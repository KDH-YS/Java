import { useEffect, useState } from "react";
export function MB(){
    const [havebreakfast,setHavebreakfast] = useState(true);
    const [numberofguest,setNumberofguest] = useState(0);
    const handleSubmit = (event)=>{
        const breakfast= havebreakfast? "먹음": "안먹음"
        alert(`아침식사 여부: ${breakfast}, 방문객 수: ${numberofguest}`);
        event.preventDefault();
    }

    useEffect(()=>{
        console.log('아침식사=>'+havebreakfast)
    },[havebreakfast]);
    useEffect(()=>{
        console.log('인원=>'+numberofguest)
    },[numberofguest]);
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input type="checkbox"
                checked={havebreakfast}
                onChange={(event)=>{
                    setHavebreakfast(event.target.checked);
                }} />
            </label>
            <br/>
            <label>방문객 수:
                <input type="number"
                value={numberofguest}
                    onChange={(event)=>{
                        setNumberofguest(event.target.value);
                    }}
                 />
            </label>
            <button type="submit">제출</button>
        </form>
        
    );
}