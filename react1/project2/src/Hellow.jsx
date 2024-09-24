

function Hello({color,name,isSpecial}){


  return (

    <div style={{color}}>
      {isSpecial? <b>*</b>:null}
      안녕하세요 {name}
      </div>
    

  );
}
Hello.defaultProps = {
  name : "noname"
}

export default Hello;