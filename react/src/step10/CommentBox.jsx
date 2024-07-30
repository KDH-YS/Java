const styles = {
    wrapper: {
        margin:8,
        padding:8,
        display:"flex",
        flexDirection: "row",
        border:'1px solid grey',
        borderRadius:16,
    },
    imageContainer:{
        height:50,
    },
    image:{
        width: 50,
        height:50,
        borderRadius:25
    },
    Cc:{
        marginLeft: 8,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    Nt:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
    },
    Ct:{
        color:'grey',
        fontSize:'16'
    }
}

export function Comment(comm){
return(
<div style={styles.wrapper}>
    <div style={styles.imageContainer}>
        <img style={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
            alt="Profile Image" />
    </div>
    <div style={styles.Cc}>
        <span style={styles.Nt}>{comm.name}</span>
        <span style={styles.Ct}>{comm.comment}</span>
    </div>
</div>
)

}