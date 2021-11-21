import React from "react";
import styles from "./index.less"
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
          <button className="btn"> {text}</button>
        </div>
      );
}
 
export default Button

