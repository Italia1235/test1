import { Dispatch, AnyAction } from "redux";
import { autCont, loginApi, logoutApi } from "../api/api";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "./redux-store";

export const initialState: initialAuthStatetype = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
export type initialAuthStatetype = {
  userId: string | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type AuthSetAcType = ReturnType<typeof AuthSetAc>;

export type ActionType = AuthSetAcType;

export const authReducer = (
  state = initialState,
  action: ActionType
): initialAuthStatetype => {
  switch (action.type) {
    case "AUTH-SET-USER":
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
};

export const AuthSetAc = (userId, login, email, isAuth) =>
  ({
    type: "AUTH-SET-USER",
    payload: { userId, login, email, isAuth },
  } as const);

export const AuthSetThunkCreator = () => {
  return (dispatch: Dispatch) => {
    autCont().then((res) => {
      if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data;
        dispatch(AuthSetAc(id, login, email, true));
      }
    });
  };
};

export const LoginThunkCreator =
  (email, password, rememberMe) =>
  (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    loginApi(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(AuthSetThunkCreator());
      }
    });
  };

export const LogoutThunkCreator =
  () => (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    logoutApi().then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(AuthSetAc(null, null, null, false));
      }
    });
  };
