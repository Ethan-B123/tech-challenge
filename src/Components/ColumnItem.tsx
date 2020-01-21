import React from 'react';
import { Task, moveTask } from '../Redux/task';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../Redux/store';

interface ColumnItemProps {
	task: Task;
}

export const ColumnItem: React.FC<ColumnItemProps> = ({ task }) => {
	const [min, max] = useSelector((state: AppState) => state.task.columnRange);
	const dispatch = useDispatch();
	return (
		<div>
			{task.column > min ? (
				<button
					onClick={() => {
						dispatch(moveTask({ taskId: task.id, to: task.column - 1 }));
					}}
				>
					{'<'}
				</button>
			) : (
				''
			)}
			<div>{task.title}</div>
			{task.column < max ? (
				<button
					onClick={() => {
						dispatch(moveTask({ taskId: task.id, to: task.column + 1 }));
					}}
				>
					{'>'}
				</button>
			) : (
				''
			)}
		</div>
	);
};
