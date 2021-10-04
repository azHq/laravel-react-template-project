import React from 'react'

export default function Circle({height="50px",width="50px",background="none",content,borderRadius:borderRadius="50%",onClick}) {
    return (
        <div onClick={onClick} className="center" style={{height:height,aspectRatio:'1',background:background,borderRadius:borderRadius,cursor:"pointer"}}>
           {content}
        </div>
    )
}
