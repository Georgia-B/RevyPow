const getData = () => {
    let url = 'https://revypow.s3.ca-central-1.amazonaws.com/data.json';

    return fetch(url)
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .catch(err => { throw err });
}

export default getData;