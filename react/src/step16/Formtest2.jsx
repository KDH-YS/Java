import { useState } from "react";
export function FT(){
    const [value, setValue]=useState('');
    const handleChange = (d)=> {
        setValue(d.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert('입력값'+value);
    }

    return(
        <>    
        <form onSubmit={handleSubmit}>
        <label>이름</label>
        <input type="text" id="name" onChange={handleChange} />
        <button type="submit">제출</button>
        </form>
        </>
    );
}