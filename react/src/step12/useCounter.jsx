import { useState } from "react";
export function useCounter(iniValue){
const [count,setCount] = useState(iniValue);
const increase = ()=> {setCount((count)=>count+1)};
const decrease = ()=> {setCount((count) =>Math.max(count-1.0))};//감소하나 0에서멈춤


return[count,increase,decrease];

}