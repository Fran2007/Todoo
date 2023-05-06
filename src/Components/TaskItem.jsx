import React from 'react';

export const Item = ({ task, onClick, name }) => {
	return (
		<div>
			{task}
			<button onClick={onClick}>{name}</button>
		</div>
	);
};
