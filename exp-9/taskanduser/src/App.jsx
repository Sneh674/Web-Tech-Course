import "./App.css";
import TaskHome from "./components/tasklist/TaskHome";
import UserHome from "./components/userlist/UserHome";

function App() {
  return (
    <div className="main">
      <TaskHome />
      <UserHome />
    </div>
  );
}

export default App;
