import { Notes } from './URLS';
import { sendRequest } from '.';
import store from '../store';

export async function getNotes(quan) {
  try {
    const data = {
      user_id: localStorage.id,
      quantity: quan,
    };
    const res = await sendRequest('get', Notes, data);
    return res.data;
  } catch (e) {
    return e.response.status;
  }
}

export async function upNotes(data) {
  try {
    const res = await sendRequest('patch', Notes, data);
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

export async function newNotes(data) {
  try {
    const res = await sendRequest('post', Notes, data);
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

export async function delNotes(data) {
  try {
    const res = await sendRequest('delete', Notes, data);
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
