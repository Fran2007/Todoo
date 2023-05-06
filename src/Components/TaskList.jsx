import { FiPlusCircle } from 'react-icons/fi';
import { useAddTasks } from '../Hooks/useAddTasks';
import { Task } from './Task';
import { Item } from './TaskItem';

import '../styles/style.css';

export function TaskList() {
	const {
		formData,
		handleChange,
		addTask,
		deleteTask,
		filteredTasksList,
		validationForm,
	} = useAddTasks();

	const handleFormChange = (name, value) => {
		handleChange(name, value);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		filteredTasksList();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validationForm()) addTask(formData.newTask, formData.newDate);
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-black'>
			<div className='max-w-md w-full'>
				<Task
					title='To Do List'
					placeholder='Add task'
					type='text'
					value={formData.newTask}
					onChange={(event) => handleFormChange('newTask', event.target.value)}
				/>
				<Task
					type='date'
					value={formData.newDate}
					onChange={(event) => handleFormChange('newDate', event.target.value)}
				/>
				<form onSubmit={handleSearch}>
					<input
						placeholder='search'
						type='text'
						value={formData.search}
						onChange={(event) => handleFormChange('search', event.target.value)}
						className='w-full rounded-md border border-gray-600'
					></input>
				</form>
				<form>
					<button
						type='submit'
						onClick={handleSubmit}
						disabled={formData.formCompleted}
						className='add-button flex items-center justify-center rounded-md w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-5s00 to-red-500 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-colors duration-300'
					>
						<FiPlusCircle className='text-white text-lg' />
					</button>
				</form>
				<ul>
					{formData.filteredTasks.map((task, index) => (
						<li key={index} className='dlex items-center justify-between mb-2'>
							{task}
							<Item
								onClick={() => {
									deleteTask(index);
								}}
								name='Delete Task'
								className='delete-button text-gray-400 hove:text-red-400 transition-colors duration-300'
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
