import React, { useState } from 'react';
import './styles.css';
import { connect } from 'react-redux'; 
import {add, toggle, clearCompleted} from "./actions/index";



const App=(props)=>{
  
    const [text, setText]=useState('');
   
   

return(

    <div className="App">
            <div className="header">
                <h1>To Do List</h1>
                <div className="adding_form">
                    <input 
                    placeholder="add to the list"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    
                    />
                    <button onClick={()=>
                    {
                        props.add(text);
                        setText("")
                    
                    }} >Add</button>
                </div>
            </div>
                
            <div className="list">
            {props.list.map(item=>
                <div 
                onClick={()=>props.toggle(item)}
                className={item.completed?"done pointer":"pointer"} 
                key={item.id}
                >
                    {item.title}
                </div>
                )} 
            </div>

            <button onClick={()=>props.clearCompleted()} className="clear">clear the completed</button>
    </div>

    );
};

const mapStateToProps=state=>{
    return{
        list:state.list
    }
}
export default connect(mapStateToProps, {add, toggle, clearCompleted})(App);

