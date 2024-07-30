// import {CT} from './Counter';
import { useEffect } from "react";
import { UseMemoComp } from "./useMemo";
import { CT } from "./Counter";
import {UnmountComp} from './UnmountComp'
import { UseCallbackComp } from "./UseCallback";
import { TimerComp } from "./TimerComp"; 
export function App(){
    return(
        <>
        <TimerComp></TimerComp>
        <UseCallbackComp></UseCallbackComp>
        {/* <UnmountComp></UnmountComp> */}
        {/* <CT/> */}
        <UseMemoComp ></UseMemoComp>
        </>
    );
}