import React from "react";
import "./index.css"
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
          <button className="btn" style={{backgroundColor:color}}>{text}</button>
        </div>
      );
}
 
export default Button

