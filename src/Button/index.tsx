import React from "react";
interface Props {

        text?: any,
        color?:any
    qeId?: any
}

const Button=({ 
   text,
   color,
    qeId
}:Props):React.ReactElement=>{
    return (
        <div className={qeId}>
          <button className="btn">{text}</button>
        </div>
      );
}
 
export default Button

