import React from "react"
import Listitem from "./listitem"
import Tools from "../componets/Tools";


const arr = [
    {
        id:1,
        title:'OCTOBER APPONMENT',
        descr:'the pasiant is sick',
        isActive:false,
    },
    {
        id:2,
        title:'novmber APPONMENT',
        descr:'the pasiant is sick',
        isActive:true,
    },
    {
        id:3,
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
            data: arr,
            activestate:'all',
        };
    }


    onListchange = (event)=> {
        console.log(event.target.value);
        const value = event.target.value;

        this.setState({
            activestate:value
        })
}
    
handledelete = (obj)=>{
    console.log('delete',obj);
    const newList = this.state.data.filter((element)=>element.id !==obj.id)

    this.setState({
        data:newList
    });
}

    render(){
        const {
            data,
            activestate
        } = this.state;
        const newList = data.filter((item)=>{
            if(activestate==='all'){
                return true;
            }
            if(activestate==='active'){
                return item.isActive===true;
            }
            if(activestate==='non-active'){
                return item.isActive===false;
            }
            return false;
        });
        return(
        <>
            <Tools onAction={this.onListchange}>
                <div className='app-list'>
                    {
                    newList.map((obj)=>{
                        return <Listitem 
                        key={obj.title}
                        title={obj.title}
                        descr={obj.descr}
                        isActive={obj.isActive}
                        onDelete={()=>{
                            this.handledelete(obj);
                        }}
                        />
                    })
                    }
                </div>
            </Tools>
        </>
        )
    }
}

export default List;