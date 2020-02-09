import React, { useEffect } from "react";
import PostList from '../../components/postTemplate/PostList';
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../modules/posts";
const PostListContainer = () => {
    const { posts } = useSelector(({posts}) => ({
        posts: posts.posts
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getList()
        );
        console.log(posts);
    },[dispatch]);

    return <PostList posts={posts}/>;
};

export default PostListContainer;
