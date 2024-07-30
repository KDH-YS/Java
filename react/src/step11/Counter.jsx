import {useState, useEffect} from "react";
export function CT(props){
    // let count = 0;
    //count[읽기변수, 입력함수] = useState(초기값)
    const [Count, setCount] = useState(0);
    const [Count2, setCount2] = useState(0);
    //마운트후,수정후 실행
    useEffect(
        ()=>{
            document.title = `총$[count]`;
            console.log('effect_count=>',Count,",",Count2);
        },[Count,Count2]
    );
    return(<>
        <div>
        <p id="msg">총 {Count}/{Count2}번 클릭했습니다.</p>
        <button onClick={()=>{
            setCount(Count+1);
            console.log('count=>',Count+1);
       }}>클릭1</button>
    </div>
            <div>
            <p id="msg">총 {Count2}번 클릭했습니다.</p>
            <button onClick={()=>{
                setCount2(Count2+1);
                console.log('count2=>',Count2+1);
           }}>클릭1</button>
        </div>
    </>

    // const [Count, setCount] = useState(0);
    // return(
    //     <div>
    //     <p id="msg">총 {Count}번 클릭했습니다.</p>
    //     <button onClick={()=>{
    //         setCount(Count+1);
    //         console.log('count=>',Count+1);
    //    }}>클릭</button>
    // </div>
        
        // <div>
        //     <p id="msg">총 {count}번 클릭했습니다.</p>
        //     <button onClick={()=>{
        //         count++;
        //         let msgEle = document.getElementById('msg');
        //         msgEle.innerText = `총 ${count}번 클릭했습니다.`;              

        //     }}>클릭</button>
        // </div>
    );
}