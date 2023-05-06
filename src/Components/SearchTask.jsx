export const SearchTask = (task, textSearch) => {
	if (!textSearch) {
		return task;
	}

	const toLowerSearch = textSearch.toLowerCase();

	return task.filter((task) => {
		const toLowerTask = task.toLowerCase();
		return toLowerTask.includes(toLowerSearch);
	});
};
