import {ADDTODO,DELETETODO,STRIKETODO} from "./action";

const initialState = {
    todos:[]
}

export function rootReducer(state=initialState,action) {
    var _state = JSON.parse(JSON.stringify(state));

    switch (action.type){
        case ADDTODO:
            _state.todos.push({
                text:action.text,
                isDone:false,
                textDes:action.textDes,
                calender:action.calender
            });
            return _state;
        case DELETETODO:
            _state.todos.splice(action.id,1);
            return _state;
        case STRIKETODO:
            _state.todos[action.id].isDone = !_state.todos[action.id].isDone;
            return _state;
        default:
            return _state;
    }

}