import React, { useState } from 'react';
import './styles.css';

const INITIAL_STATE=[
    { id: 1, title: "shopping", completed: false },
    { id: 2, title: "washing the car", completed: true },
    { id: 3, title: "practise react", completed: true },
    { id: 4, title: "pick up the kids from nursery", completed: false }
];


const App=()=>{

    const [list, setList]=useState(INITIAL_STATE);
    const [inputValue, setInputValue]=useState("");

    const checkMark=(item)=>{
        setList(list.map(obj=>obj.id===item.id?{...obj, completed:!obj.completed}:obj));
    };

    const addNew=(item)=>{

        if (inputValue!==""){
            setList([...list,{id:Date.now(), title:item, completed:false}]);
            setInputValue("");
        }
    };

    const clearCompleted=()=>{
        setList(list.filter(item=>!item.completed));
    }

   

return(

    <div className="App">
            <div className="header">
                <h1>To Do List</h1>
                <div className="adding_form">
                    <input 
                    placeholder="add to the list"
                    onChange={(e)=>setInputValue(e.target.value)}
                    value={inputValue} 
                    />
                    <button onClick={()=>{addNew(inputValue)}}>Add</button>
                </div>
            </div>
                
            <div className="list">
            {list.map(item=>
                <div 
                className={item.completed?"done pointer":"pointer"} 
                key={item.id}
                onClick={()=>checkMark(item)}>
                    {item.title}
                </div>
                )} 
            </div>

            <button onClick={()=>{clearCompleted()}} className="clear">clear the completed</button>
    </div>

    );
};

export default App;

