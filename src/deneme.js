// import React, {useState} from 'react';
// import './styles.css';

// const INITIAL_STATE=[
//     { id: 1, title: "shopping", completed: false },
//     { id: 2, title: "washing the car", completed: true },
//     { id: 3, title: "practise react", completed: true },
//     { id: 4, title: "pick up the kids from nursery", completed: false }
// ];

// const Deneme=()=>{

//     const [list,setList]=useState(INITIAL_STATE);
//     const [inputValue, setInputValue]=useState('');

//     const addNew=(item)=>{
//         if(inputValue!==""){
//             setList([...list,{id:Date.now(),title:item,completed:false}])
//         };
//        setInputValue("");
//     };

//     const checkMark=(item)=>{
//         setList(list.map(obj=>
//             obj.id===item.id?{...obj, completed:!obj.completed}:obj
//             ))
//     };

//     const clearCompleted=()=>{
//         setList(list.filter(item=>!item.completed))
//     }

//     return(
//         <div className="App">
//             <div className="header">
//                 <h1>To Do List</h1>
//                 <div className="adding_form">
//                     <input
//                     value={inputValue}
//                     onChange={(e)=>{
//                         setInputValue(e.target.value)
//                         }} 
//                     placeholder="add to the list" />
//                     <button onClick={()=>addNew(inputValue)}>Add</button>
//                 </div>
//             </div>
            
//             <div className="list">
//                 {list.map(item=>(
//                     <div 
//                     key={item.id}
//                     className={item.completed?"done pointer":"pointer"}
//                     onClick={()=>checkMark(item)}
//                     >{item.title}</div>
//                 ))}
//             </div>
//             <button onClick={()=>clearCompleted()} className="clear">clear the completed</button>
//         </div>

//     )
    
  
// };

// export default Deneme;