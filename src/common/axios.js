/*
 * @Author: Zin, LiaoZhiYong 
 * @Date: 2019-05-09 14:19:07 
 * @Last Modified by: Zin, LiaoZhiYong
 * @Last Modified time: 2019-05-09 14:32:34
 */

import axios from 'axios';

axios.defaults.baseURL = "";
axios.defaults.timeout = 5000;

// request interceptors
axios.interceptors.request.use(
  config => {
    // do soming before send the request

    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// response interceptors
axios.interceptors.response.use(
  response => {
    // do soming after response, like natigate to index if is not login

    return response;
  },
  error => {
    return Promise.reject(error);
  }
)

/**
 * axios http request main function
 *
 * @param {Object} params axios config
 * @returns
 */
async function http(params) {
  let { data } = await axios(params);

  return data;
}

/**
 * GET
 * 
 * @param {Object} params GET params
 */
export const GET = (params) => http({
  method: 'get',
  url: params.url,
  params: params.data
});

/**
 * POST
 * 
 * @param {Object} params POST params
 */
export const POST = (params) => http({
  method: 'post',
  url: params.url,
  params: params.data
})
