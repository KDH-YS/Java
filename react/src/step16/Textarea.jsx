import { useState } from "react";
export function TA(){
    const [value, setValue]=useState('');
    const handleChange = (event)=> {
        setValue(event.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert('입력값'+value);
    }

    return(
        <>    
    <form action="" onSubmit={handleSubmit}>
        <label>요청사항: <br/>

        <textarea id="name" onChange={handleChange}> </textarea>
    </label><br/>
        <button type="submit">제출</button>
    </form>
        </>
    );
}