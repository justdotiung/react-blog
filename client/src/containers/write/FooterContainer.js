import React from 'react';
import Footer from '../../components/write/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

const FooterContainer = ({ history }) => {
    const { title, contents, tags} = useSelector(({ write }) => ({
        title: write.title,
        contents: write.contents,
        tags: write.tags
    }));
    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        console.log(title);
        dispatch(
            writePost({title, contents,tags})
        );
        history.push('/');
    }

    return (
      <Footer onSubmit={onSubmit}/>
    );
};

export default withRouter(FooterContainer);