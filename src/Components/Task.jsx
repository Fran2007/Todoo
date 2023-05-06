export const Task = ({ title, placeholder, type, value, onChange }) => {
	return (
		<div className='task-container border rounded-md p-10 mb-10'>
			<p className='text-1xl font-bold mb-4'>{title}</p>
			<input
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				className='w-full rounded-md border border-gray-300 p-2'
			/>
		</div>
	);
};
