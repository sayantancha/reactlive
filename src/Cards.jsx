import React from 'react'
const Cards=(props)=>{
    return(
        <>
        <div className="main">
            <div className="card">
                <img src={props.imagsrc} id="picture2"></img>
            </div>
            <div>
                <p className="title">{props.sname}</p>
            </div>
            <div className="">
                <a href="www.facebook.com" id="link" >{props.link}</a>
            </div>
            </div>
        </>
            );
}
export default Cards;