//action
export const ADDTODO = 'addtodo';
export const DELETETODO = 'deletetodo';
export const STRIKETODO = 'striketodo';

export function addTodo(text,textDes,calender) {
    return{
        type:ADDTODO,
        text,
        textDes,
        calender
    }
}

export function deleteTodo(id) {
    return{
        type:DELETETODO,
        id
    }
}

export function strikeTodo(id) {
    return{
        type:STRIKETODO,
        id
    }
}