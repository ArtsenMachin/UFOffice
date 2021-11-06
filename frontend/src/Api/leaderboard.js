import { Leaderboard, UserRating } from './URLS';
import { sendRequest } from '.';

export async function getLeaderboard() {
  try {
    const data = {
      user_id: localStorage.id,
    };
    const res = await sendRequest('get', Leaderboard, data);
    return res.data;
  } catch (e) {
    return e.response.status;
  }
}
export async function getUserRating() {
  try {
    const data = {
      user_id: localStorage.id,
    };
    const res = await sendRequest('get', UserRating, data);
    return res.data;
  } catch (e) {
    return e.response.status;
  }
}

export default {};
