import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const users = [
    { id: 1, name: "홍길동", job: "도둑", hobby: "스틸" },
    { id: 2, name: "엄복동", job: "자전거도둑", hobby: "자전거" },
    { id: 3, name: "장발동", job: "빵도둑", hobby: "달리기" }
];

export function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [initialLoad, setInitialLoad] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (initialLoad) {
            const queryParams = new URLSearchParams(location.search);
            const query = queryParams.get('query');
            if (query) {
                setSearchTerm(query);
                setFilteredUsers(users.filter(user => user.hobby === query));
            }
            setInitialLoad(false);
        }
    }, [location.search, initialLoad]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // 검색 버튼 클릭 시 URL을 업데이트하고 결과를 필터링합니다.
        const result = users.filter(user => user.hobby === searchTerm);
        setFilteredUsers(result);
        navigate(`/search?query=${searchTerm}`);
    };

    return (
        <>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="검색어 입력"
                />
                <button type="submit">검색</button>
            </form>
            {filteredUsers.length > 0 ? (
                <div>{filteredUsers.map(user => (
                    <h1>찾는 취미는? {user.hobby}                        
                    </h1>))}
                    <ul>
                        {filteredUsers.map(user => (
                            <p key={user.id}>
                                <p>이름: {user.name}</p>
                                <p>직업: {user.job}</p>
                            </p>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>해당 취미를 가진 사람이 없습니다</div>
            )}
        </>
    );
}