import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';

interface TaskNoId {
	title: string;
	column: number;
}

export interface Task {
	title: string;
	column: number;
	id: number;
}

type TaskState = {
	maxId: number;
	columnRange: [number, number];
	[id: number]: Task;
};

export const TaskSlice = createSlice({
	name: 'task',
	initialState: {
		maxId: 2,
		columnRange: [0, 2],
		[0]: {
			title: 'work on app',
			column: 3,
			id: 0
		},
		[1]: {
			title: 'interview',
			column: 1,
			id: 1
		},
		[2]: {
			title: 'Hope you enjoy!',
			column: 2,
			id: 2
		}
	} as TaskState,
	reducers: {
		addTask: (state, action: PayloadAction<{ task: TaskNoId }>) => {
			state[state.maxId + 1] = { ...action.payload.task, id: state.maxId + 1 };
			state.maxId++;
		},
		moveTask: (
			state,
			action: PayloadAction<{ taskId: number; to: number }>
		) => {
			const { taskId, to } = action.payload;
			state[taskId].column = to;
		},
		setColumnRange: (
			state,
			action: PayloadAction<{ range: [number, number] }>
		) => {
			state.columnRange = action.payload.range;
		}
	}
});

export const { addTask, moveTask, setColumnRange } = TaskSlice.actions;
