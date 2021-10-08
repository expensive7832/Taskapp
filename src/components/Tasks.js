import Task from "./Task";

const Tasks = ({tasks, ondelete, ontoggle}) => {
    return (
        <div className="card-body pt-2  px-2">
            {tasks.map((task, index) => (
                <Task key={index} task={task} ondel={ondelete} ontoggle={ontoggle} />
            ))}
        </div>
    )
}

export default Tasks
