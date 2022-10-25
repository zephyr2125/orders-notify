"# orders-notify" 
Js to creat notify demo:

import './style.css';

import axios from 'axios';

const ajaxToGetData = () => {
  axios.post(`https://app.nativenotify.com/api/indie/notification`, {
    subID: 'test',
    appId: 4515,
    appToken: 'GD2EaTbd0BEOBVDWEp1GTj',
    title: 'Đơn đặt hàng mới',
    message: 'Bạn có đơn hàng mới',
    pushData:
      '{ "image": "https://huanth.xyz/wp-content/uploads/2022/03/cropped-magento-300x300.png" }',
  });
};

const btn = document.getElementById('btn-getdata');

btn.addEventListener('click', () => {
  ajaxToGetData();
});
