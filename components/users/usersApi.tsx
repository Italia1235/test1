import { UsersType } from "../../redux/users-reducer";
import React from "react";
import { Users } from "./users";
import { Preloader } from "../common/Preloader/Preloader";

interface UsersProps {
  users: UsersType[];
  usersCount: number;
  pageSize: number;
  currentPage: number;
  isLoading: boolean;
  disableButton: number[];
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  disableButtonAC: (disable, userId) => void;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
  followUser: (userId: number) => void;
  unFollowUser: (userId: number) => void;
}

export class UsersApi extends React.Component<UsersProps> {
  followAd = (userId: number) => {
    this.props.follow(userId);
  };
  unFollowAd = (userId: number) => {
    this.props.unfollow(userId);
  };

  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = (page: number) => {
    this.props.getUsersThunkCreator(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          usersCount={this.props.usersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          follow={this.followAd}
          unFollow={this.unFollowAd}
          users={this.props.users}
          currentPage={this.props.currentPage}
          disableButton={this.props.disableButton}
          unFollowUser={this.props.unFollowUser}
          followUser={this.props.followUser}
        />{" "}
      </>
    );
  }
}
