import { useParams } from "react-router-dom";
const users = [
    {id:1,name:"홍길동", job:"도둑"},
    {id:2,name:"엄복동", job:"자전거도둑"},
    {id:3,name:"장발동", job:"빵도둑"}
]
export function User(){
    const {id}= useParams();
    const user = users.find(item=> item.id===Number(id));
        
    return(
        <>

        { user?(<>
            <h2>사용자 아이디 : {id} </h2>
            <p>이름:{user.name}</p>
            <p>직업:{user.job}</p>
            </>
        ):(<p>자료없음</p>)}

        </>
        
    );
}