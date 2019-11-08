import axios from 'axios';

const apiUrl = 'https://67ofaijzg0.execute-api.ca-central-1.amazonaws.com/V1';
const s3Url = 'https://revypow.s3.ca-central-1.amazonaws.com/data.json';

const getData = () => {
    return fetch(s3Url)
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .catch(err => { throw err });
}

export const saveSubscription = (subscription) => {
    return axios({
        method: 'POST',
        url: `${apiUrl}/subscription`,
        data: { subscription }
    });
}

export const removeSubscription = (subscription) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/subscription`,
        data: { subscription }
    });
}

export default getData;