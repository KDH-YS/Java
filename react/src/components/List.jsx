import './List.css'
export function List(){
    return(

        <div>
                <div class="add">
        <div>
        <h2>이름:  <input type="text" placeholder="이름"/></h2>
        <h2>나이:  <input type="text" placeholder="나이"/></h2>
        <h2>직업:  <input type="text" placeholder="직업"/></h2>
        </div>
        <button class="add-button">추가</button>

    </div>
    <div class="added">
        <div class="added-list"> <p>  홍길동 (34세) 무직 <button class="delete-button">삭제</button></p></div>

    </div>
        </div>
        
    );
}