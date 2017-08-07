import * as url from './urlConfig.js'
import axios from 'axios';

// 获取轮播图
export const bannerApi = {
  list() {
    return axios.get(url.banner).then((res) => {
      return res.data;
    });
  }
}

// 排行榜
export const rankApi = {
  ranking3() {
    return axios.get(url.ranking3).then((response) => {
      return response.data
    })
  }
}