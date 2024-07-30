// import { useState } from "react";
// export function Gate(){
//     const [isFull,setIsFull] = useState(false);
//     const [isEmpty,setIsEmpty] = useState(true);
//     const [count,setCount] = useState(0);
//     const increaseCount = ()=>{
//         let _count = count +1
//         setIsFull(_count >=10);
//         setIsEmpty(_count<=0);
//         setCount(_count);
//     }
//     const decreaseCount=()=>{
//         let _count = count - 1
//         setIsEmpty(_count<=0)
//         setIsFull(_count>=10)
//         setCount(_count);
//     }

//     return(
//         <>
//     <div style={{padding:16}}>
//         <p>총 {count}명 수용했습니다.</p>
//         <button onClick={increaseCount} disabled={isFull} >입장</button>
//         <button onClick={decreaseCount} disabled={isEmpty}>퇴장</button>
//         {isFull && <p style={{color:'red'}}>정원이 가득찼습니다.</p>}
//         {isEmpty && <p style={{color:'red'}}>정원이 가득찼습니다.</p>}


//     </div>
//         </>
//     );
// }

import { useState } from "react";

export function Gate() {
  const [count, setCount] = useState(0);
  const isFull = count >= 10;
  const isEmpty = count <= 0;

  const changeCount = (amount) => {
    const newCount = count + amount;
    setCount(newCount);
  };

  return (
    <div style={{ padding: 16 }}>
      <p>총 {count}명 수용했습니다.</p>
      <button onClick={() => changeCount(1)} disabled={isFull}>
        입장
      </button>
      <button onClick={() => changeCount(-1)} disabled={isEmpty}>
        퇴장
      </button>
      {isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p>}
      {isEmpty && <p style={{ color: 'red' }}>정원이 비어있습니다.</p>}
    </div>
  );
}