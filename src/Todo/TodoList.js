import React from 'react'
import TodoItem from "./TodoItem";


const Styles ={
    ul:{
        listStyle:'none',
        margin:0,
        padding:0
    }
}


export default function TodoList(props) {
             return(
                 <ul style={Styles.ul}>
                     {props.todos.map((todo,index)=>{
                         return <TodoItem todo={todo} key ={todo.id} index={index+1} onChange={props.onToggle}/>
                     })}
                 </ul>
             )
}