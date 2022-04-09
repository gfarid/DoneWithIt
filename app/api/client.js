import { create } from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';

const apiClient = create({
    baseURL: 'http://192.168.1.14:9000/api'
});


const get = apiClient.get;

apiClient.get = async (url , params , axiosConfig)=> {
    const response = await get(url ,params ,axiosConfig);

    if(response.ok){
        cache.store(url, response.data);
        return response;
    }

    const data  = await cache.get(url);
    console.log(data);
    return data ? { ok : true , data } : response;

}

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToekn();
    if(!authToken) return ;
    request.headers['x-auth-token'] = authToken; 
});


export default apiClient;