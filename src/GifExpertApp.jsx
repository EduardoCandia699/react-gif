import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['The Last of Us']);

	const onAddCategory = (value) => {
		if (categories.includes(value)) return;

		setCategories([value, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory onNewCategory={(value) => onAddCategory(value)} />

			{categories.map((category) => (
				<GifGrid category={category} key={category} />
			))}
		</>
	);
};
