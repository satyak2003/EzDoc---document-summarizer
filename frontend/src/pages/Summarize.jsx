import { useState } from "react";

function Summarize(){

    const [text,setText] = useState("Untitled")

    const handleTextChange=(event)=>{
        setText(event.target.value);
    };

    return(
        <div>
        <div className="-my-70">
            <input className="bg-slate-800 rounded-sm" type="text" value={text} onChange={handleTextChange}/>
        </div>
        </div>
    );
}

export default Summarize;