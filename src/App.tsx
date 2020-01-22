import React, { useEffect } from 'react';
import './App.css';
import { Column } from './Components/Column';
import { useDispatch } from 'react-redux';
import { setColumnRange } from './Redux/task';

const App: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setColumnRange({ range: [0, 3] }));
	}, []);

	return (
		<div className="app-root">
			<Column id={0} header="Backlog" color="#ff4444" />
			<Column id={1} header="To Do" color="#4444ff" />
			<Column id={2} header="In Progress" color="#44ffff" />
			<Column id={3} header="Completed" color="#44ff44" />
		</div>
	);
};

export default App;
