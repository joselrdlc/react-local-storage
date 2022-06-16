import { TaskRow } from "./TaskRow";

export function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  const taskTableRows =(cond) =>{

    return (
      tasks
      .filter(task=> task.done === cond)
      .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
      ))
    )
  }
  
  return (
    <table className="table table-striped table-bordered table-dark border-secondary">
      <thead>
        <tr className="table-primary">
          <th>tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  );
}