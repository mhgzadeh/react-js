import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TasksTypeContext {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksTypeContext>(
  {} as TasksTypeContext
);

export default TasksContext;
