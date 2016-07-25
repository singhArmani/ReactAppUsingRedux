/**
 * Created by singh on 24/07/2016.
 */

function getId(state){

    //-1 is the initial value
    console.log("the state at this time is "+state);
    return state.todos.reduce((maxId,todo) => Math.max(maxId,todo.id), -1) + 1;
}


export default function reducer(state, action){
    switch (action.type){
        case 'ADD_TODO':
            console.log("arrived at todo action")
            return Object.assign({},state, {
                todos:[{
                text:action.text,
                completed:false,
                id:getId(state)
                },...state.todos]});

        case 'COMPLETE_TODO':
            return Object.assign({}, state, {
                todos:state.todos.map((todo,index) => {
                    return todo.id === action.id ?
                        Object.assign({},todo,{completed:!todo.completed}) : todo
                })
            });

        case 'DELETE_TODO':
            console.log("arrived at delete to do action")
            return Object.assign({}, state, {todos: state.todos.filter((todo) =>{
                return todo.id !== action.id
            })});

        default:
            return state;
    }
}
