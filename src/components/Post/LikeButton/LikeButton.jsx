import { useState } from "react";
import './LikeButton.css';

const LikeButton = (props) => {

    const [buttonClass, setButtonClass ] = useState("inactive");
    
    function handleClick(){

        if(buttonClass === "inactive"){
            setButtonClass("activeGreen");
        }
        else{
            setButtonClass("inactive");
        }

    }
        return (
            <div>
                <button className={buttonClass} onClick={handleClick}>{props.message}</button>
            </div>
        )
}

export default LikeButton