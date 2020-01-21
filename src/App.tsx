import React, { useEffect } from 'react';
import './App.css';
import { Column } from './Components/Column';
import { useDispatch } from 'react-redux';
import { setColumnRange } from './Redux/task';

const App: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setColumnRange({ range: [0, 4] }));
	}, []);

	return (
		<div>
			<Column id={0} header="title0" />
			<Column id={1} header="title1" />
			<Column id={2} header="title2" />
			<Column id={3} header="title2" />
			<Column id={4} header="title2" />
		</div>
	);
};

export default App;
