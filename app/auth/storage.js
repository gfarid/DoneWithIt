import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = "authToken";

const storeToken = async authToken => {
    try {        
        await SecureStore.setItemAsync(key , authToken);
    } catch (error) {
        console.log('Error storing the auth token' , error);
    }
}

const getToekn  = async ()=>{
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log('Error retrieving the auth token' , error);
    }
}


const removeToken = async () =>{
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('Error removing the auth token' , error);
    }
}

const getUser = async ()=>{
    const token = await getToekn();
    return token ? jwtDecode(token) : null;
}


export default {
    storeToken ,
    getUser,
    removeToken,
    getToekn
}