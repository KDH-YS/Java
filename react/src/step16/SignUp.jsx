import { useState } from "react";
export function SignUp(){
    const [name,setName]=useState('');
    const [gender, setGender] = useState('남자');
function changename(event){
    setName(event.target.value);
}
function onSm(e){
    alert(`이름: ${name} \n성별: ${gender}`)
    
    e.preventDefault();

}
const changegender=(event)=>(
    setGender(event.target.value)
)

    return(
        <form onSubmit={onSm}>
            <label>
                이름:
                <input type="text" value={name} onChange={changename} />
            </label>
            <br/>
            <label>성별:
            <select onChange={changegender}>
            <option value="남자"> 남자</option>
            <option value="여자"> 여자</option>
            </select>
            </label>
            <button type="submit">제출</button>

        </form>
    );
}