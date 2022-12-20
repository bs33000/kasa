import React, {useState, useRef} from "react";
import Chevron from "../../assets/images/vectorBas.svg";

function Collapsible (props) {
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef(); //assign value to this DOM element

    return (
        <div className="collapsible">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                <h2>{props.aboutTitle}</h2>
                <img
					className={isOpen ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
            </button>
            <div
                className="content-parent"
                ref={parentRef}
                // conditionnal height: if opened then actual height as defined by parent.ref DOM element, 
                // 0px otherwise - note that in REACt style is an Objet
                style={
                    isOpen ? {
                        height: parentRef.current.scrollHeight + "px"
                    }
                    : {
                        height: "0px"
                    }
                }
            >
                <div className="content">
                    <p>{props.aboutText}</p>
                </div>
            </div>
        </div>
    )
}

export default Collapsible;
