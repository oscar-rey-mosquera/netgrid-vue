import Axios from 'axios'

const axios = Axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})


axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')

    if(token) config.headers.Authorization = `Bearer ${token}`

    return config;
  }, function (error) {
    return Promise.reject(error);
  });


  axios.interceptors.response.use(function (response) {
    return response;
  }, function ({response}) {
        
    if(response.status === 422) {
      alert(response.data.message)
    }


    return Promise.reject(error);
  });


export default axios