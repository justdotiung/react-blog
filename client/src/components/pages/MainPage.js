import React from 'react';
import BlogList from '../list/BlogList';
import Footer from '../common/Footer';
import HeaderContainer from '../../containers/commons/HeaderContainer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <BlogList />
            <Footer />
        </>
    );
};

export default MainPage;