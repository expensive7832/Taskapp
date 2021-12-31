import Task from "./Task";

const Tasks = ({ tasks, onDel, onToggle}) => {
    
    return (
        <div className="card-body pt-2  px-2">
            {tasks?.map((task, index) => (
                <Task key={index} task={task} onDel={onDel} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks
