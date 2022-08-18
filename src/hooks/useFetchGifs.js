import {useEffect, useState} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const imagenes = await getGifs(category);
		setImages(imagenes);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
	}, []);

	return {
		images,
		isLoading,
	};
};
