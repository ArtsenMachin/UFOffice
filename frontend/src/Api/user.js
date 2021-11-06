import { Login } from './URLS';
import { sendRequest } from '.';
import router from '../router';
import store from '../store';

export async function toLogin(data) {
  try {
    const res = await sendRequest('post', Login, data);
    localStorage.setItem('login', res.data.login);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', res.data.role);
    localStorage.setItem('id', res.data.token);
    router.push('/office');
    const dialog = {
      action: '',
      elProps: '',
      value: false,
    };
    store.dispatch('dialog/openDialog', dialog, { root: true });
    return res.data;
  } catch (e) {
    return e.response.status;
  }
}

export default {};
