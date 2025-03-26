import { useState } from "react";

const TaskHome = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskname = taskName;
    setTaskList([...taskList, { taskname }]);
    e.target.taskname.value = "";
    console.log(taskList);
    setTaskName("");
  };
  const handleDelete = (e) => {
    const taskname = e.target.parentNode.querySelector(".taskname").innerText;
    setTaskList(taskList.filter((task) => task.taskname !== taskname));
  };
  return (
    <div>
      <h1>Task List</h1>
      <div className="task-list">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="taskname"
            id=""
            placeholder="Enter task"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            required
          />
          <input type="submit" value="Enter" />
        </form>
      </div>
      <div className="alltasks">
        {taskList.length === 0 ? (
          <h3>No tasks</h3>
        ) : (
          taskList.map((task, index) => {
            return (
              <div className="task" key={index}>
                <div className="taskname">{task.taskname}</div>
                <button onClick={handleDelete}>Delete</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskHome;
