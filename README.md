"# orders-notify" <br>
Js to creat notify demo:<br>

<code>import './style.css';</code> <br>
<code>import axios from 'axios';</code> <br>

<code>const ajaxToGetData = () => { </code> <br>
<code>axios.post(`https://app.nativenotify.com/api/indie/notification`, { </code> <br>
    <code>subID: 'test', </code> <br>
    <code>appId: 4515, </code> <br>
    <code>appToken: 'GD2EaTbd0BEOBVDWEp1GTj', </code> <br>
    <code>title: 'Đơn đặt hàng mới', </code> <br>
    <code>message: 'Bạn có đơn hàng mới', </code> <br>
    <code>pushData: </code> <br>
      <code>'{ "image": "https://huanth.xyz/wp-content/uploads/2022/03/cropped-magento-300x300.png" }', </code> <br>
  <code>}); </code> <br>
<code>}; </code> <br>

<code>const btn = document.getElementById('btn-getdata'); </code> <br>

<code>btn.addEventListener('click', () => { </code> <br>
  <code>ajaxToGetData(); </code> <br>
<code>}); </code> <br>
