import { connect } from "react-redux";
import { RedirectHOC } from "../../hoc/AuthRedirect";
import {
  disableButtonAC,
  followAc,
  followUserThunkCreator,
  getUsersThunkCreator,
  setCurrentPageAC,
  setTotalUsersCountAC,
  unfollowAC,
  unFollowUserThunkCreator,
  UsersType,
} from "../../redux/users-reducer";
import { UsersApi } from "./usersApi";

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType;

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    disableButton: state.usersPage.disableButton,
  };
};
export type MapStateToPropsType = {
  usersPage: UsersType[];
  pageSize: number;
  usersCount: number;
  isLoading: boolean;
  disableButton: number[];
};
export type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUser: (users: UsersType[]) => void;
  isLoadingStart: (isLoading) => void;
};

export const UsersContainer = RedirectHOC(
  connect(mapStateToProps, {
    follow: followAc,
    unfollow: unfollowAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    disableButtonAC: disableButtonAC,
    getUsersThunkCreator: getUsersThunkCreator,
    followUser: followUserThunkCreator,
    unFollowUser: unFollowUserThunkCreator,
  })(UsersApi)
);
