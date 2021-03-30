function HyerinComp({
    flex="flex",
    column="column",
    center="center",
    times="Times New Roman",
    color="blue",
    fontsize="35px",
    width="150px",
    height="40px",
    radius = "15px",
    border = "2px solid blue",
    bgcolor = "lightcyan",
    pointer = "pointer"

}){
    return <div style={{
        display:flex,
        flexDirection:column,
        alignItems:center,
    }}>
        <h3 style={{
            fontFamily:times,
        }}><span style={{
            color:color,
            fontSize:fontsize,
        }}>Hyerin's</span> Component</h3>
        <button style={{
            width:width,
            height:height,
            borderRadius:radius,
            backgroundColor:bgcolor,
            border:border,
            cursor:pointer,
        }}>Click the button</button>
    </div>
}


export default HyerinComp;