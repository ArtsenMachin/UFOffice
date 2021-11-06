import { Team } from './URLS';
import { sendRequest } from '.';

export async function getTeam() {
  try {
    const data = {
      user_id: localStorage.id,
    };
    const res = await sendRequest('get', Team, data);
    return res.data;
  } catch (e) {
    return e.response.status;
  }
}

export default {};
