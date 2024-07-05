import axios from 'axios'

export interface FetchResponseData<T> {
  count: number;
  results: T[];
}
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f3fee085b85342c5a530084ae1ee5f02'
    }
})