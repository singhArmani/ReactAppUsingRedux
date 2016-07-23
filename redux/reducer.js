/**
 * Created by singh on 24/07/2016.
 */

export default function reducer(state, action){
    switch (action.type){
        case 'ADD_TODO':
            Object.assign({},state, {
                todos:[{
                text:action.text,
                completed:false,
                id:getId(state)
                },...state.todos]});
            break;

        default:
            return state;
    }
}

function getId(state){
    return state.todo.reduce((maxId,todo) => Math.max(maxId,todo.id), -1) + 1;
}