import React from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
    const [todos,setTodos]=React.useState([
        {id:1, completed: false, title : 'Купить хлеб'},
        {id:2, completed: true, title : 'Купить 2'},
        {id:3, completed: false, title : 'Купить 3'}
    ])
    function toggleTodo(id){
         setTodos(todos.map(todo=>{

             if(todo.id===id){
                 todo.completed=!todo.completed;
             }

             return todo;
             }))


        //console.log('todo id=',id)
    }
   function removeTodo(id){
        setTodos(todos.filter(todo=>todo.id !==id))
   }

   function addTodo(title){
     //   console.log('add');
        setTodos(
            todos.concat([
                {
                    title:title,
                     id:Date.now(),
                    completed: false
                }
            ])
        )
   }

  return (
     <Context.Provider value={{removeTodo:removeTodo}}>
    <div className="wrapper">
      <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length?(<TodoList todos={todos} onToggle={toggleTodo}/>):('No todo!')}

    </div>
     </Context.Provider>
  );
}

export default App;
