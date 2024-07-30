import { useState, useEffect } from "react";
export function SB(){
    const [value, setValue]=useState('melon');
    useEffect(()=>{
        console.log('새 값=>' +value);
    },[value]);
    const handleChange = (event)=> {
        setValue(event.target.value);
    }
    const fruit = (e)=>{
        e.preventDefault();
        alert('선택한과일 :'+value);
    }

    return(
        <>    
<form action="" onSubmit={fruit}>
<select value={value} id="name" onChange={handleChange}>
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
    <option value="grape">포도</option>
    <option value="melon">멜론</option>
</select>
<button type="submit">제출</button>
</form>        </>
    );
}
