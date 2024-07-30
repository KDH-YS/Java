import React, { useRef } from 'react';

export function LT() {
    const nameInput = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        let msg = nameInput.current.value;
        alert(msg);
    }

    return(
        <>    
        <form onSubmit={handleSubmit}>
        <label>이름</label>
        <input type="text" id="name" ref={nameInput}/>
        <button type="submit">제출</button>
    </form>
    </>
    );
}