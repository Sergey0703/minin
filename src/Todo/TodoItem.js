import React,{useContext} from 'react';
import Context from '../context';

const styles={
    li:{
      display:'flex',
      justifyContent:'space-between',
        alignItems:'center',
        padding:'.5rem, 1rem ',
        border:'1px solid #ccc',
        borderRadius:'4px',
        marginBottom:'.5rem'

    },
    input:{
        marginRight: '1rem'
    }
}


export default function TodoItem({todo, index,onChange}){
    const {removeTodo}=useContext(Context);
    console.log('todo=',todo)
    const classes=[];
    if(todo.completed){
        classes.push('done');
    }
    return(
             <li style={styles.li}>
                 <span className={classes.toString()}>
                     <input type="checkbox" checked={todo.completed}
                            style={styles.input}
                            onChange={()=>onChange(todo.id)}/>
                     <strong>{index}</strong>
                     {todo.title}

                 </span>
                 <button className='rm' onClick={removeTodo.bind(null,todo.id)}>&times;</button>
             </li>
    )
}