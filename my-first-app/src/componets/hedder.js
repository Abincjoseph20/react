import React from "react";
import './hedder.css';

function Hedder(){
    return(
        <div className='app-hedder'>
            <span className='hedder-totle'>name</span>
            <span>home</span>
            <span>usage</span>
            <span>setting</span>
            <span>logout</span>
        </div>
    );
}

export default Hedder;