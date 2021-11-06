/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import axios from 'axios';

export function sendRequest(method, url, data = null) {
  const req = {
    method,
    url,
    resposeType: 'json',
  };
  if (req.method === 'get') {
    req.params = data;
  } else {
    req.data = data;
  }

  return axios(req);
}

export default {};
