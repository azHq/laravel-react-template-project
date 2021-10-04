import {React,useState} from 'react'

export default function OutlineButton({height=42,width=140,borderColor="grey",hoverColor="green",borderWidth=1,text="button",onClick,borderRadius=5,normalTextColor="black",hoverTextColor="white"}) {

    const [tempBorder,setBorderColor]=useState(borderColor)
    const [tempBackground,setBackgroundColor]=useState("none")
    const [tempTextColor,setTextColor]=useState(normalTextColor)
    
    const MouseEnter=()=>{
        setBorderColor(hoverColor);
        setBackgroundColor(borderColor);
        setTextColor(hoverTextColor);
    }
    const MouseLeave=()=>{
        setBorderColor(borderColor);
        setBackgroundColor("none");
        setTextColor(normalTextColor);
        
    }
    return (
        <div>
            <button onClick={onClick} onMouseEnter={(e)=>MouseEnter(e)} onMouseLeave={MouseLeave} style={{height:height,width:width,borderRadius:borderRadius,background:tempBackground,outline:"none",border:`${borderWidth}px solid ${tempBorder}`,color:tempTextColor}}>{text}</button>
        </div>
    )
}
