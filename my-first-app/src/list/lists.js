import React from "react"
import Listitem from "./listitem"
import Tools from "../componets/Tools";


const arr = [
    {
        title:'OCTOBER APPONMENT',
        descr:'the pasiant is sick',
        isActive:false,
    },
    {
        title:'novmber APPONMENT',
        descr:'the pasiant is sick',
        isActive:true,
    },
    {
        title:'december APPONMENT',
        descr:'the pasiant is sick',
        isActive:false,
    },
];

//using class compnents
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: arr
        };
    }


    onListchange = (event)=> {
        console.log(event.target.value);
        const value = event.target.value;
        const newList = arr.filter((item)=>{
            if(value==='all'){
                return true;
            }
            if(value==='active'){
                return item.isActive===true;
            }
            if(value==='non-active'){
                return item.isActive===false;
            }
            return false;
        });
        console.log(newList);
        // arr = newList;
        this.setState({
            data: newList,
        },()=>{
            console.log('after state')
        }

    )
}
    
    render(){
        return(
        <>
            <Tools onAction={this.onListchange}>
                <div className='app-list'>
                    {
                    this.state.data.map((obj)=>{
                        return <Listitem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
                    })
                    }
                </div>
            </Tools>
        </>
        )
    }
}

export default List;