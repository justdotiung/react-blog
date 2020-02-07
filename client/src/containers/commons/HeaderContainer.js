import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/common/Header";
import { userLogout } from "../../modules/check";
import { logout } from "../../modules/auth";

const HeaderContainer = ({...props}) => {
  console.log(props)
  const { user } = useSelector(({ check }) => ({ user: check.user }));
  const dispatch = useDispatch();
  const onClick = e => {
    e.preventDefault();
    dispatch(userLogout());
    dispatch(logout());
  };
  return <Header user={user} onClick={onClick} {...props}></Header>;
};

export default HeaderContainer;
