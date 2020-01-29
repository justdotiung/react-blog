import React from 'react';
import BlogList from '../list/BlogList';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MainPage = () => {
    return (
        <>
            <Header />
            <BlogList />
            <Footer />
        </>
    );
};

export default MainPage;