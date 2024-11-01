import './MemberList.css';
import {useState} from 'react';
export function List(){
    const [users, setUsers] = useState(
    [
        {id:1, name:'홍길동', age:24, job:'도둑'},
        {id:2, name:'엄복동', age:34, job:'자전거도둑'},
        {id:3, name:'장발장', age:44, job:'빵도둑'}
    ]
    );

    // 텍스트값용 변수
    const [name, setName] = useState('');
    const changeName = (e)=>{setName(e.target.value);}

    const [age, setAge] = useState('');
    const changeAge = (e)=>{setAge(e.target.value);}

    const [job, setJob] = useState('');
    const changeJob = (e)=>{setJob(e.target.value);}

    const addUser = (e) => {

    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

        e.preventDefault();
        const newUser = {id:newId,name:name,age:Number(age),job:job}
        setUsers([...users,newUser]);
        setName('');
        setAge('');
        setJob('');
    }

    const deleteUser = (_id) =>{
        const updateUsers = users.filter(user=>user.id !==_id);
        setUsers(updateUsers);
    }
 
  return (
  <>
  <div class="input-container">
    <form id="userForm" onSubmit={addUser} >
      <table >
        <tr>
          <td>이름</td>
          <td><input type="text" placeholder="이름" id="nameInput"
          onChange={changeName} value={name}/></td>
          <td rowspan="3"><button type='submit' id="addBtn">추가</button></td>
        </tr>
        <tr>
          <td>나이</td>
          <td><input type="text" placeholder="나이" id="ageInput"
          onChange={changeAge} value={age}/></td>
        </tr>
        <tr>
          <td>직업</td>
          <td><input  type="text" placeholder="직업" id="jobInput"
          onChange={changeJob} value={job}/></td>
        </tr>
      </table>
    </form>
  </div>
  <div class="list-container">
    <ul id="userList">
        {
            users.map(
                (user)=>(
                    <li key={user.id}>{user.id}.{user.name}({user.age}세){user.job} <button class="delBtn" onClick={()=>deleteUser(user.id)}>삭제</button></li>

                )
            )
        }
    </ul>
  </div>
  </>
  );
}