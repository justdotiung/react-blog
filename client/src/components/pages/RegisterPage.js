import React from 'react';
import UserTemplate from '../user/UserTemplate';
import RegisterFromContainer from '../../containers/user/RegisterFromContainer';
const RegisterPage = () => {
    return (
        <UserTemplate>
            <RegisterFromContainer />
        </UserTemplate>
    );
};

export default RegisterPage;