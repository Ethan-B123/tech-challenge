import React from 'react';
import './App.css';
import { AddTaskBtn } from './Components/AddTaskBtn';

const App: React.FC = () => {
	return (
		<div>
			<h1>Hi!</h1>
			<AddTaskBtn column={0} />
		</div>
	);
};

export default App;
