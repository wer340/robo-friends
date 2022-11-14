 import React from "react";


const Scrollable=(props)=>{
//console.log(props)
return(
    <div className="ma4" style={{overflowY:'scroll',border: '3px solid  pink',height:'600px'}}>
        {props.children}
    </div>
)

}
export default Scrollable;