import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import "./style.css";
import Tasks from "./components/Tasks";

const App = () => {
  const [Todos, setTodos] = useState(() =>{
   const savedTask = localStorage.getItem("Tasks")
   if(savedTask){
      return JSON.parse(savedTask)
   }else{
      return []
   }
  });


  useEffect(() =>{
   const setTask = () =>{
      localStorage.setItem("Tasks", JSON.stringify(Todos))
   }
   setTask()
  }, [Todos])

  const [showTask, setshowTask] = useState(false);
  
  const Add = (task) => {
      setTodos([
         ...Todos,
         {id: Todos.length + 1, ...task}
      ])
  };

  const onDel= ( id) =>{
    setTodos(Todos.filter((todo) => todo?.id !== id))
  }

  const onToggle= (id) =>{
    setTodos(Todos?.map((todo) => todo?.id === id ? {...todo, reminder: !todo?.reminder} : todo))
  }

  
  return (
    <div className="container main card mt-5 m-auto">
      <Header click={() => setshowTask(!showTask)} show={showTask} />

      { showTask && <AddTask onAdd={Add} /> }
      
      {Todos.length > 0 ? 
        <Tasks tasks={Todos} onDel={onDel} onToggle={onToggle}  />
      : 
        <p className="text-center text-warning fw-bold lead">No Data</p>
      }

      <Footer setTodos={setTodos}/>
    </div>
  );
};

export default App;
