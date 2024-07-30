import { useState } from "react";

export function Exam() {
  const [Eng, setEng] = useState(0);
  const [Ko, setKo] = useState(0);
  const [Mt, setMt] = useState(0);
  const [Sum, setSum] = useState(0);
  const [Avr, setAvr] = useState(0);
  const [fail, setFail] = useState(0);

  function changeKo(event) {
    let _score = Number(event.target.value);
    setKo(_score);
  }

  function changeEng(event) {
    let _score = Number(event.target.value);
    setEng(_score);
  }

  function changeMt(event) {
    let _score = Number(event.target.value);
    setMt(_score);
  }

  function Marking() {
    let failcount = 0;
    let sum = Ko + Eng + Mt;
    let avr = Math.round(sum / 3);
    setSum(sum);
    setAvr(avr);
    if(Ko<60){failcount++}
    if(Eng<60){failcount++}
    if(Mt<60){failcount++}
    setFail(failcount);
  }
  function Grade(props){
    if(props.score>60 && fail==0){
        return(<p>합격입니다.</p>)
    }else {
        return(<p>불합격입니다.</p>)
    }
}
 

  return (
    <div style={{ textAlign:'center'}}>
      <p>국어: <input type="text"  onChange={changeKo} /></p>
      <p>영어: <input type="text"  onChange={changeEng} /></p>
      <p>수학: <input type="text" onChange={changeMt} /></p>
      <button onClick={Marking}>판정</button>

      <p>총점: {Sum} 점</p>
      <p>평균: {Avr} 점</p>
      <p>과락 {fail}건</p>
      <Grade score={Avr}></Grade>
    </div>
  );
}