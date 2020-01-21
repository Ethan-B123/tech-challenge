import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';

interface Task {
	title: 'string';
	column: number;
}

type TaskState = {
	maxId: number;
	[id: number]: Task;
};

export const TaskSlice = createSlice({
	name: 'task',
	initialState: { maxId: 0 } as TaskState,
	reducers: {
		addTask: (state, action: PayloadAction<{ task: Task }>) => {
			state[state.maxId + 1] = action.payload.task;
			state.maxId++;
		},
		moveTask: (
			state,
			action: PayloadAction<{ taskId: number; to: number }>
		) => {
			const { taskId, to } = action.payload;
			state[taskId].column = to;
		}
	}
});

export const { addTask, moveTask } = TaskSlice.actions;
