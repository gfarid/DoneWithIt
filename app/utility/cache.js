import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
    try {
      const item = {
          value,
          timestamp:Date.now()
      }  
      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem(`${prefix}${key}`, jsonValue)
    } catch (e) {
        console.log(e);
    }
  }


  const get = async () => {
    try {
      const value = await AsyncStorage.getItem(`${prefix}${key}`);
      const item = JSON.parse(value);

      if(!item) return null;

      if(isExpired(item)) {
          await AsyncStorage.removeItem(`${prefix}${key}`);
          return null;
      }

      return item.value;

    } catch(e) {
        console.log(e);
    }
}


const isExpired = (item) =>{
    const now = dayjs();
    const storedTime = dayjs(item.timestamp);
    return now.diff(storedTime , 'minute') > 5 ;
  }


export default {
    store,
    get
}