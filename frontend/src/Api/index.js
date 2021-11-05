import axios from 'axios';

export function sendRequest(method, url, data = null) {
  const req = {
    method,
    url,
    resposeType: 'json',
  };
  req.data = data;

  return axios(req);
}

export default {};
