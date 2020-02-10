import React, { useEffect, useCallback } from 'react';
import Modal from '../../components/common/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChange } from '../../modules/modal';

const ModalContainer = () => {
    const {toggle} = useSelector(({modal}) => ({
        toggle: modal.toggle,
    }));
    const dispatch = useDispatch();

    const onClick = useCallback((e) => {
        e.preventDefault();
        dispatch(
            toggleChange()
        );
    },[dispatch]);

    useEffect(() => {
        console.log(toggle);
    },[toggle])
    return (
     <Modal onClick={onClick} toggle={toggle}/>
    );
};

export default ModalContainer;