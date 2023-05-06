import { SearchTask } from '../Components/SearchTask';
import { useState, useReducer, useEffect } from 'react';
import { reducer, Value } from '../Components/reducer';

export const useAddTasks = () => {
	const [state, dispatch] = useReducer(reducer, Value);
	const [formData, setFormData] = useState({
		newTask: '',
		newDate: '',
		formCompleted: false,
		search: '',
		filteredTasks: [],
	});

	const handleChange = (key, value) => {
		setFormData({ ...formData, [key]: value });
		validationForm();
	};
	const addTask = (newTask, newDate) => {
		dispatch({
			type: 'Add',
			payload: `${newTask},  ${newDate}`,
		});
		setFormData({ ...formData, newTask: '', newDate: '', search: '' });
	};

	const deleteTask = (index) => {
		dispatch({ type: 'Delete', payload: index });
	};

	const validationForm = () => {
		const { newTask, newDate } = formData;
		return newTask && newDate;
	};

	const filteredTasksList = () => {
		setFormData({
			...formData,
			filteredTasks: SearchTask(state.Tasks, formData.search),
		});
	};

	useEffect(() => {
		filteredTasksList();
	}, [state.Tasks, formData.search]);

	return {
		formData,
		handleChange,
		addTask,
		deleteTask,
		filteredTasksList,
		validationForm,
	};
};
