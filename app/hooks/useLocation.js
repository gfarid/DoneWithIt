
import { useState , useEffect } from 'react';
import * as Location from 'expo-location';

export default useLocation = ()=>{
    const [location, setLocation] = useState(null);
    useEffect(()=>{
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            return;
          }
    
          let { coords: { latitude , longitude}} = await Location.getCurrentPositionAsync({});
          setLocation({ latitude , longitude});
        })();
      },[]);

    return location ;
};
