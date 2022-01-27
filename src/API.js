import {
    API_HOST,
    API_URL,
    API_KEY,
} from './config';

const params = {
    method: 'GET',
    headers:{
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
    }
};

const apiSettings = {

    fetchTotalDatas : async () => {

        const endPoint = `${API_URL}totals`;
        return await (await fetch(endPoint, params)
        .then(r => (r))
        .catch(err => {console.error(err)}))
        .json();
    },

    fetchCountryDatas : async country => {

        const endPoint = `${API_URL}country?name=${country}`;
        return await (await fetch(endPoint, params)
        .then(r => (r))
        .catch(err => {console.error(err)}))
        .json();
    },

    fetchAllCountriesDatasForHelp : async () => {

        const endPoint = `${API_URL}help/countries`;
        return await (await fetch(endPoint, params)
        .then(r => (r))
        .catch(err => {console.error(err)}))
        .json();
    }
};

export default apiSettings;
