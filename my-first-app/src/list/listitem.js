import React from 'react';
import Labal from './labal';
import './listitems.css'


function Listitem(props){
    const   {
        title,
        descr,
        isActive,
        onDelete,

    } = props;
    return(
        <div className='list-item'>
            <hr/>
            <div className='list-title'>
                <h4>{title}</h4>
                <label onClick={onDelete}>delete</label>
            </div>
            <div className='list-descr'>
                {descr}
            </div>
            <div className='list-labal'>
                    <Labal isActive={isActive}/>
                <hr/>
            </div>

        </div>
    )
}


export default Listitem;