import React from 'react';
import {FaTimes} from 'react-icons/fa';
import Moment from 'react-moment';

function Task({task, onDel, onToggle}) {

    return (
            
            <div onDoubleClick={() => onToggle(task?.id)} className={`d-flex justify-content-between align-items-center py-2 mb-2 shadow img-thumbnail ${task.reminder ? "reminder" : ""}`}>
                <div className="content ps-2">
                    <h5 className="mb-2">{task?.text}</h5>
                    <small className=""><Moment fromNow ago>{task?.time}</Moment></small>
                </div>

                <div className="lead text-danger pe-2">
                    <FaTimes onClick={() => onDel(task?.id)}/>
                </div>

            </div>
        
    )
}

export default Task

