import { ADD, CLEAR_COMPLETED, TOGGLE } from "../actions";

const INITIAL_STATE={
    list:[
        { id: 1, title: "shopping", completed: false },
        { id: 2, title: "washing the car", completed: true },
        { id: 3, title: "practise react", completed: true },
        { id: 4, title: "pick up the kids from nursery", completed: false }
    ]
};

export const reducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case ADD:
            return{
                ...state,
                list:[...state.list, 
                    {
                        id:state.list.length+1,
                        title:action.payload,
                        completed:false
                        
                    }]
            };
        case TOGGLE:
            return {
                ...state,
                list:state.list.map(item=>item.id===action.payload.id
                    ? {...item,completed:!item.completed}
                    : item)
            };
        case CLEAR_COMPLETED:
            return {
                ...state,
                list:state.list.filter(item=>!item.completed)
            };
        default: return state;
    }
    
}