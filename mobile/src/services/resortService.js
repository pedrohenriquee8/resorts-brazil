import URL from './config';

export default class ResortService {
    getResorts = async () => {
        try {
            const data = await fetch(`${URL}/resorts`);
            const response = await data.json();
            return response;
        } catch (error) {
            throw error;
        }
    };
}