import axios from 'axios';
const url = 'http://localhost:3005'

const fetchData = (endpoint,id='')=>{
return axios.get(`${url}/${endpoint}/${id}`).then((result)=>{
   return  result.data
})
}





export default {
    fetchData,
    
    
    
}