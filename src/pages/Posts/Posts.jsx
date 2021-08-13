import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../datas/api';
import PostsWrapper from './PostsWrapper';
import { setPosts } from '../../Redux/action';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setPosts(dispatch);
  }, []);
  const data = useSelector((state) => state.posts);
  return (
    <PostsWrapper>
      <h1>Posts</h1>
      {data.map((v, i) => {
        return (
          <div key={i}>
            <h1>{i+1}</h1>
            <h3>{v.body}</h3>
          </div>
        );
      })}
    </PostsWrapper>
  );
};

export default Posts;
