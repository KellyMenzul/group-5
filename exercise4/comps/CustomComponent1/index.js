function LeahComp({
    flex="flex",
    flexdirection="column",
    justify="center",
    headingColor="#4f518c",
    headingSize="25px",
    headingFamily="sans-serif",
    spanColor="darkviolet",
    buttonWidth="120px",
    buttonHeight="80px",
    border="none",
    buttonColor="lavender",
    buttonFont="#4f518c"


})
{
    return <div style={{
        display: flex,
        flexDirection: flexdirection,
        alignItems: justify,
        
    }}>
        <h3 style={{
            color:headingColor,
            fontSize: headingSize,
            fontFamily: headingFamily
        }}>
           Leah's<span
            style ={{
                
                color:spanColor
            }}
            > Component</span>
        </h3>
    
    <button style={{
        width: buttonWidth,
        height: buttonHeight,
        border: border,
        backgroundColor: buttonColor,
        color: buttonFont,
        
        
    }}>
            Leah
    </button>

    </div>
}

export default LeahComp;