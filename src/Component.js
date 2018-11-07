import React from 'react';
import {connect} from 'react-redux';
import {addTodo,deleteTodo,strikeTodo} from './action'

class Components  extends React.Component{
    constructor(props){
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onClickAdd(){
        this.props.AddTodo(this.refs.add.value,this.refs.des.value,this.refs.cal.value);
        this.refs.add.value = "";
        console.log(this.refs.cal.value);
    }
    onClickDelete(id){
        this.props.DeleteTodo(id);
    }
    onClickStrike(id){
        this.props.StrikeTodo(id);
    }
    render(){
        return(
            <div>
                <h1>TodoApp9</h1>
                <h2>title</h2>
                <input type={"text"} ref={'add'}></input>
                <br/>
                <h2>description</h2>
                <textarea rows={"5"} ref={"des"}></textarea>
                <input type={"button"} value={"追加"} onClick={this.onClickAdd}></input>
                <br/>
                <input type="date" ref={"cal"}/>
                <ul>
                {this.props.todoList.map((items,i) => {
                    return(
                        <li key={i}>
                            {items.isDone ?
                                <s onClick={() => this.onClickStrike(i)}>{items.text}</s>:
                                <span onClick={() => this.onClickStrike(i)}>{items.text}</span>
                            }
                            <ul>
                                <li key={i}>{items.textDes}</li>
                                <li>{items.calender}</li>
                            </ul>

                            <input type={"button"} value={"x"} onClick={() => this.onClickDelete(i)}/>

                        </li>

                    )
                })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        todoList:state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return{
        AddTodo:(text,textDes,calender) => dispatch(addTodo(text,textDes,calender)),
        DeleteTodo:(id) => dispatch(deleteTodo(id)),
        StrikeTodo:(id) => dispatch(strikeTodo(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Components)