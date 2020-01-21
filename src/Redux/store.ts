import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TaskSlice } from './task';

const rootReducer = combineReducers({
	task: TaskSlice.reducer
});

export function createStore() {
	return configureStore({
		reducer: rootReducer
	});
}

export type AppState = ReturnType<typeof rootReducer>;
