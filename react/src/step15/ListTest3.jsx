const animals=[
    '고양이','호랑이','기러기',
]

export function LT(){

    return(
        <ul>
            {/*  */}
        {animals.map(
            (animal, index)=>{
             return   <li key={index}> {index}. {animal} </li>
               
            }
        )}
        </ul>
    );
}