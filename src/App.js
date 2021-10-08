import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import "./style.css";


const App = () => {

    const [Task, setTask] = useState([]);

      const [showTask, setshowTask] = useState(false);

       useEffect(() => {
       
        const getTask = async() => {
          const taskFromServer = await fetchTask()
           setTask(taskFromServer)
        }

        getTask()
       },[]) 

       const fetchTask = async() => {
        const res = await fetch("http://localhost:8000/task")
        const data = await res.json();
        return data
    }

      const Del = async (id) =>{
            await fetch(`http://localhost:8000/task/${id}`, {
            method: "DELETE"
        }
        )

         setTask( Task.filter((Task) => id!==Task.id));
      }


      const fetchSingle = async(id) => {
        const res = await fetch(`http://localhost:8000/task/${id}`)
        const data = await res.json();
        return data
    }

      const toggle = async (id) =>{
          const dataToToggle = await fetchSingle(id)
          const res = {...dataToToggle, reminder: !dataToToggle.reminder}

          const updateTask = await fetch(`http://localhost:8000/task/${id}`,{
              method: "PUT", 
              headers:{
                "content-type" : "application/json"
             },
             body: JSON.stringify(res)
          })

          const data = await updateTask.json()
        setTask(Task.map((task) => id === task.id ? {...task, reminder: data.reminder}: task))
      }

      const Add = async(task) =>{
         const add = await fetch("http://localhost:8000/task", {
             method: "POST",
             headers:{
                "content-type" : "application/json"
             },
             body:  JSON.stringify(task)
         })
          
         const data = await add.json()
         setTask([...Task, data]);
      }
      


 return (
  <div className="container main card mt-5 m-auto">
        <Header click={() => setshowTask(!showTask)} show={showTask}/>
        {showTask && <AddTask onAdd={Add}/>}
        {Task.length > 0 ? <Tasks tasks={Task} ondelete={Del} ontoggle={toggle}/> :
         <p className="text-center text-warning fw-bold lead">No Data</p> 
         }

         <Footer/>
    </div>
 )}

export default App;
