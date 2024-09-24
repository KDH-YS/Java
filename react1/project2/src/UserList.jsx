function User({user}){
  return(
  <div>
  <b>{user.username}</b> <span>({user.email})</span>
</div>
        );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@naver.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@gmail.com'
    }
  ];
  return (
    <>
    
    {users.map(user =>(
      <User user={user} key={user.id}/>
    ))}
    </>
      //   <div>
      //   {users.map(user => (
      //     <div key={user.id}>
      //       <b>{user.username}</b> <span>({user.email})</span>
      //     </div>
      //   ))}
      // </div>
  );
}

export default UserList;