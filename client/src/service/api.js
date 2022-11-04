import axios from "axios";
import { response } from "express";
import { API_NOTIFICATION_MESSAGES } from "../constant/config";

const API_URL = "http://localhost:8080/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    //Stop Global Loader
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response.status) {
    return { isSucess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const processError=()=>{
if(error.response){
 

} 
else if(error.request)
{

}
else {

}

}