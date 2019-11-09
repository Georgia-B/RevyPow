import axios from 'axios';

let apiUrl = 'https://67ofaijzg0.execute-api.ca-central-1.amazonaws.com/V1';
if (process.env.NODE_ENV === 'development') {
    apiUrl = 'https://67ofaijzg0.execute-api.ca-central-1.amazonaws.com/test';
}

export const getData = () => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/data`
    }).then(response => {
        return response.data;
    }).catch(err => {
        console.log(`Failed to fetch data. Error: ${err}`);
        return null;
    })
}

export const saveSubscription = (subscription) => {
    return axios({
        method: 'POST',
        url: `${apiUrl}/subscription`,
        data: { subscription }
    }).catch(err => {
        console.log(`Failed to save subscription. Error: ${err}`);
    });
}

export const deleteSubscription = (subscription) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/subscription`,
        data: { subscription }
    }).catch(err => {
        console.log(`Failed to delete subscription. Error: ${err}`);
    });;
}