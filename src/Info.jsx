import React from 'react';
import Cards from './Cards';
import './App.css'
const Info=()=>{
    return(
        <>
        <div><h2 id="heading">My Gallery</h2></div>
        <div className="responsive">
        <div className="responsive1">
        <Cards
            imagsrc="background.jpg"
            sname="Hello world"
            link="Goto"
        />
        </div>
        <div className="responsive2">
        <Cards
            imagsrc="background.jpg"
            sname="Hello world"
            link="Goto"
        />
        </div>
        <div className="responsive3">
        <Cards
            imagsrc="background.jpg"
            sname="Hello world"
            link="Goto"
        />
        </div>
        <div className="responsive4">
        <Cards
            imagsrc="background.jpg"
            sname="Hello world"
            link="Goto"
        />
        
        </div>
        
        </div>
        </>
    );
};
export default Info;