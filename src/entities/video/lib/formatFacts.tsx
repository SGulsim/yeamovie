import type { Country, Genre, Staff } from '../model/types';

export const formatGenres = (genres: Genre[]) => {
	if (!genres?.length) return '-';
	return genres.map(({ genre }) => genre).join(', ');
};

export const formatCountries = (countries: Country[]) => {
	if (!countries?.length) return '-';
	return countries.map(({ country }) => country).join(', ');
};

export const getProducer = (staff?: Staff[]) => {
	if (!staff?.length) return '-';
	return staff.find(item => item.professionKey === 'PRODUCER')?.nameRu;
};

export const getActors = (staff?: Staff[], limit = 5) => {
	if (!staff?.length) return '-';
	return staff
		.filter(item => item.professionKey === 'ACTOR')
		.slice(0, limit)
		.map(actor => actor.nameRu)
		.join(', ');
};
