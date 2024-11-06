import React from 'react';
import Labal from './labal';
import './listitems.css'

function Listitem(props){
    console.log(props);
    return(
        <div className='list-item'>
            <div className='list-title'>
                <h4>{props.title}</h4>
            </div>
            <div className='list-descr'>
                <h4>{props.descr}</h4>
            </div>
            <div className='list-label'>
                    <Labal onAction={()=>{
                        console.log('paranent clicked'); //callback props
                    }} isActive={props.isActive}/> 
                <hr/>
            </div>
        </div>
    )
};


export default Listitem;