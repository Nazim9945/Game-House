import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponseData<T> {
  count: number,
  results: T[],
  next:string |null
}
const apiClient= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f3fee085b85342c5a530084ae1ee5f02'
    }
})

class APIClient<T>{
    constructor(public endpoint:string){}
    getAll=(config:AxiosRequestConfig)=>{
       return  apiClient
          .get<FetchResponseData<T>>(this.endpoint,config)
          .then((res) => res.data);
    }
}
export default APIClient