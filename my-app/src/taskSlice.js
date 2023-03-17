import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' },
    ],
    totalTasks: 3,
  },
  reducers: {
    addTask: (state, action) => {
      const { title } = action.payload;
      const newTask = { id: state.totalTasks + 1, title };
      state.tasks.push(newTask);
      state.totalTasks += 1;
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(index, 1);
      state.totalTasks -= 1;
    },
    updateTask: (state, action) => {
      const { id, title } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks[index].title = title;
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
