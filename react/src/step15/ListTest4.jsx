const students=[
    {id:1, name:'홍길동', job:'도둑'},
    {id:2, name:'장발장', job:'빵도둑'},
    {id:3, name:'엄복동', job:'자전거도둑'},
]
//출력 1. 이름(직업)
export function LT(){
    return(
        <>
        <ul>
        {students.map((stu)=>(
         <li style={{listStyle:'none'}} key={stu.id}>{stu.id}.{stu.name}({stu.job})</li>
        )

        )}
        </ul>
        </>
    );
}