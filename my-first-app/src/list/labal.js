import React from "react";
import './labals.css';

//clas component 

class Labal extends React.Component{
    render(){
        const props = this.props;
        const style = props.isActive ? { background:'green'} : {background:'red'};
                            //callback props
        return <span onClick={props.onAction} className="list-labal-item" style={style} >{ props.isActive ? 'Active':'non-active'}</span>; 
    }
};

export default Labal;