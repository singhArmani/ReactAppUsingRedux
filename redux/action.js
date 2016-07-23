/**
 * Created by singh on 24/07/2016.
 */
export default actions = {
    addTodo(text){
        return {
            type:'ADD_TODO',
            text: text
        }
    }
}