import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponseData<T>{
    count:number,
    results:T[]
}


const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
    const[data,setData]=useState<T[]>([]);
    const[error,setError]=useState('');
    const [isLoading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true);
        const controller=new AbortController();
        apiClient.get<FetchResponseData<T>>(endpoint,{signal:controller.signal,...requestConfig}).then((res)=>{
            setData(res.data.results);
            setLoading(false);
        })
        .catch(err=>{
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        })
        return ()=>controller.abort()
    },deps?[...deps]:[]);
   return {error,data,isLoading}

}
export default useData