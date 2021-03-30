export default HannahComp;

function HannahComp({
    flex= "flex",
    flexdirection= "column",
    justify= "center",
    width= "200px",
    height= "200px",
    spancolor= "linen",
    font= "verdana",
    fontsize= "15px",
    backgroundColor= "#CFD11A",
    border="1px dashed linen"
}){
    return(
        <div
        style= {{
            display:flex,
            flexDirection:flexdirection,
            alignItems:justify,
        }}
        >
            <h3
            style = {{
                fontFamily:font,
                fontSize:fontsize,
            }}
            >Hannah's<span
            style ={{
                color:spancolor,
            }}
            > Component</span></h3>
            <button
            style= {{
                width:width,
                height:height,
                border:border,
                backgroundColor:backgroundColor
            }}
            >START!</button>
        </div>
    )
}

export default HannahComp;