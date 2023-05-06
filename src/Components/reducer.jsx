export const Value = { Tasks: [] };

export const reducer = (state = Value, action) => {
	switch (action.type) {
		case 'Add':
			return { ...state, Tasks: [...state.Tasks, action.payload] };
		case 'Delete':
			return {
				...state,
				Tasks: state.Tasks.filter((_, index) => index !== action.payload),
			};
		default:
			return state;
	}
};
