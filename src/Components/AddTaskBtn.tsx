import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/task';

interface AddTaskBtnProps {
	column: number;
}

export const AddTaskBtn: React.FC<AddTaskBtnProps> = ({ column }) => {
	const [showTextInput, setShowTextInput] = useState(false);
	const [textValue, setTextValue] = useState('');
	const dispatch = useDispatch();
	return (
		<>
			<button
				onClick={() => {
					if (showTextInput) {
						if (textValue === '') {
							setShowTextInput(false);
							return;
						}
						dispatch(
							addTask({
								task: {
									title: textValue,
									column
								}
							})
						);
						setShowTextInput(false);
						setTextValue('');
					} else {
						setShowTextInput(true);
					}
				}}
			>
				Add an item +
			</button>
			{showTextInput ? (
				<input
					type="text"
					onChange={e => {
						setTextValue(e.currentTarget.value);
					}}
					value={textValue}
				/>
			) : (
				''
			)}
		</>
	);
};
