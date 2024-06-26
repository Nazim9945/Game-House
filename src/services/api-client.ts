import axios from 'axios'

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f3fee085b85342c5a530084ae1ee5f02'
    }
})