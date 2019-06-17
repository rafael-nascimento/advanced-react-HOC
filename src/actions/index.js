import { SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH } from 'actions/types';
import axios from 'axios';

const fetchComments = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENT,
    payload: response
  }
}

const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
});

export {
  saveComment,
  fetchComments,
  changeAuth
}