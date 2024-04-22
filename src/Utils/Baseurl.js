import axios  from "axios"

const api = axios.create({
  // baseURL : "https://storyclub-backend.onrender.com"
  // baseURL : "http://localhost:3000"
  baseURL: "https://activelisteners-backend-latest.onrender.com/",
});

api.interceptors.request.use(

    function (config){
       
        return config;
    }

)
api.interceptors.request.use(

)
export default api;