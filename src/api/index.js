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