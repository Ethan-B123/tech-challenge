import React from 'react';
import { Task, moveTask } from '../Redux/task';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../Redux/store';
import './ColumnItem.css';

interface ColumnItemProps {
	task: Task;
}

export const ColumnItem: React.FC<ColumnItemProps> = ({ task }) => {
	const [min, max] = useSelector((state: AppState) => state.task.columnRange);
	const dispatch = useDispatch();
	return (
		<div className="column-item-root">
			{task.column > min ? (
				<button
					className="column-item-btn-left"
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
					className="column-item-btn-right"
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
