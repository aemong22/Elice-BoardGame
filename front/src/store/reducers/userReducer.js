import { LOGIN_USER, LOGOUT_USER } from "../actions/actionTypes";
const initialstate = {
  user: null,
};
export default function userReducer(state = initialstate, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log("%c로그인 성공!", "color: #d93d1a;");
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT_USER:
      console.log("%c로그아웃 성공!", "color: #d93d1a;");
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
