import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000/ ',
    withCredentials:false
})


export default {

    gotTasks(){
        return apiClient.get('/tasks')
    }
}
