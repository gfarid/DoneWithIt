import React ,{ useState } from 'react'

export default function useApi(apiFunc) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading ,setLoading] = useState(false);
    
    const request = async (...args)=> {
        setLoading(true);
        const res = await apiFunc(...args);
        setLoading(false);
    
        setError(!res.ok);
        setData(res.data);
        return res;
    }
    
    return { data , error , loading , request };
}

