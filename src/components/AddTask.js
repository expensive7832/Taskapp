import { useState } from "react";

const AddTask = ({onAdd}) => {

    const [text, setText] = useState("");
    const [time, setTime] = useState("");
    const [reminder, setReminder] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        if(text === ""){
           alert( "Enter Task");
        }

        onAdd({text, time, reminder});
        
        setText("");
        setTime("");
        setReminder(false);
    }

    return (
       
        <fieldset className="bg-success mb-3 text-light">
             <form className="m-3" onSubmit={submit}>
                <div className="form-group mt-3">
                    <label htmlFor="task">Task</label>
                    <textarea name="" value={text} onChange={(e) => setText(e.target.value)} id="task" className="form-control" rows="2"></textarea>
                </div>


                <div className="form-group mt-3">
                    <label htmlFor="datetime">Date/Time</label>
                    <input value={time} onChange={(e) => setTime(e.target.value)} type="datetime-local" id="datetime" className="form-control" />
                </div>

                <div className="input-group mt-3">
                    <label htmlFor="check">Set Reminder</label>
                    
                    <input value={reminder} checked={reminder}  onChange={(e) => setReminder(e.currentTarget.checked)} type="checkbox" id="check" className="form-check mx-5" />
                </div>

                <input type="submit" name="AddTask"  className="w-100 btn btn-dark text-white btn-md mt-2 p-1" />

          </form>

        </fieldset>

    )
}

export default AddTask
