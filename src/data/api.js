async function getData(url) {
    return await fetch(url).then(json => json.json());
}

const api = {
    data: {
        getData(url){
            return getData(url);
        }
    }
}


export default api;