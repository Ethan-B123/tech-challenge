import React from 'react';
import { AddTaskBtn } from './AddTaskBtn';
import { AppState } from '../Redux/store';
import { useSelector } from 'react-redux';
import { Task } from '../Redux/task';
import { ColumnItem } from './ColumnItem';

interface ColumnProps {
	header: string;
	id: number;
}

export const Column: React.FC<ColumnProps> = ({ header, id }) => {
	const taskState = useSelector((state: AppState) => state.task);
	const columnTasks = Object.values(taskState).filter(el => {
		if (typeof el === 'number') return false;
		if (el.constructor === Array) return false;
		//@ts-ignore
		if (el.column != id) return false;
		return true;
	}) as Task[];
	return (
		<div>
			<h1>{header}</h1>
			<AddTaskBtn column={id} />
			{columnTasks.map(task => (
				<ColumnItem key={task.id} task={task} />
			))}
		</div>
	);
};
