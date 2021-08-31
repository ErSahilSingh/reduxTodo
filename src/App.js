
import { useState } from 'react';
import { AddTodoAction ,RemoveTodoAction} from './action/TodoAction';
import { useDispatch ,useSelector } from 'react-redux';
import './App.css';

function App() {
  const [todo, setTodo]= useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const {todos}=Todo;

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };
  const removeHandler=(t)=>{
    dispatch(RemoveTodoAction(t));
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list app to redux</h2>
        <form onSubmit={handleSubmit}>
          <input
          placeholder="enter somithing"
          style={{
            width: 350,
            padding: 20,
            borderRadius:20,
            border:"none",
            frontSize: 20,

          }}
          onChange={(e)=> setTodo(e.target.value)}
          />
          <button type="submit" style={{padding:12,borderRadius:25,fontSize:15,marginLeft:20,}}>Go</button>

        </form>
        <ul className="allTodos">
          {
            todos && todos.map((t) =>(
              <li key={t.id} className="singleTodo">
              <span className="todoText">{t.todo}</span>
              <button onClick={()=>removeHandler(t)} style={{borderRadius:25,padding:10,border:"1px solid white", color:"white",backgroundColor:"orangered"}}>Delete</button>
            </li>
            ))
          }
          
        </ul>
      </header>
    </div>
  );
}

export default App;
