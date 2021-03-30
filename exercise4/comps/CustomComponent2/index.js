function KellyComp({
    flex= "flex",
    flexdirection= "column",
    justify= "center",
    width= "200px",
    height= "100px",
    spancolor= "green",
    borderradius= "10px",
    font= "arial",
    fontsize= "24px",
    backgroundcolor= "yellow"
}){
    return(
        <div
        style= {{
            display:flex,
            flexDirection:flexdirection,
            alignItems:justify,
            backgroundColor:backgroundcolor,
        }}
        >
            <h3
            style = {{
                fontFamily:font,
                fontSize:fontsize,
            }}
            >Kelly's<span
            style ={{
                color:spancolor,
            }}
            > Component</span></h3>
            <button
            style= {{
                width:width,
                height:height,
                borderRadius:borderradius,
            }}
            >Click Me</button>
        </div>
    )
}

export default KellyComp;