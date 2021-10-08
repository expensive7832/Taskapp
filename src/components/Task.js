import React from 'react';
import {FaTimes} from 'react-icons/fa';
function Task({task, ondel, ontoggle}) {
    return (
        
            <div onDoubleClick={() => ontoggle(task.id)} className={`d-flex justify-content-between align-items-center py-2 mb-2 shadow img-thumbnail ${task.reminder ? "reminder" : ""}`}>
                <div className="content ps-2">
                    <h5 className="">{task.text}</h5>
                    <p className="">{task.time}</p>
                </div>

                <div className="lead text-danger pe-2">
                    <FaTimes onClick={() => ondel(task.id)}/>
                </div>

            </div>
        
    )
}

export default Task

