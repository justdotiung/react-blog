import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/common/Header";
import { userLogout } from "../../modules/check";
import { logout } from "../../modules/auth";
import { useHistory } from "react-router-dom";
import Modal from "../../components/common/Modal";

const HeaderContainer = ({ ...props }) => {
  const [toggle, setToggle] = useState(false);
  const message = "로그아웃 할까요?";
  // console.log(props)
  const history = useHistory();
  const { user } = useSelector(({ check }) => ({ user: check.user }));
  const dispatch = useDispatch();
  const onToggle = () => {
    setToggle(true);
  };

  const onClick = () => {
    dispatch(userLogout());
    dispatch(logout());
    setToggle(false);
    history.push("/");
  };

  const onCancel = () => {
    setToggle(false);
  }

  return (
    <Header
      user={user}
      onClick={onToggle}
      {...props}
      toggle={toggle}
      modal={<Modal toggle={toggle} onToggle={onClick} onCancel={onCancel} message={message}/>}
    />
  );
};

export default React.memo(HeaderContainer);
