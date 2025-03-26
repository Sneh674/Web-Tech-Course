import { useState } from 'react'

const TaskHome = () => {
    const [taskList, setTaskList] = useState([]);
    const [taskName, setTaskName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const taskname = taskName;
        setTaskList([...taskList, taskname]);
        e.target.taskname.value = '';
        console.log(taskList);
        setTaskName('');
    }
  return (
    <div>
      <h1>Task List</h1>
      <div className="task-list">
        <form onSubmit={handleSubmit}>
            <input type="text" name="taskname" id="" placeholder='Enter task' onChange={(e)=>{setTaskName(e.target.value)}}/>
            <input type="submit" value="Enter" />
        </form>
      </div>
    </div>
  )
}

export default TaskHome
