import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts } from '../utils/localStorage';

const Post = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const PostTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

const PostMeta = styled.p`
  font-size: 0.9em;
  color: #666;
`;

const BlogPost = () => {
  const { id } = useParams();
  const post = getPosts()[id];

  return (
    <Post>
      <PostTitle>{post.title}</PostTitle>
      <PostMeta>by {post.author} on {post.date}</PostMeta>
      <div>{post.content}</div>
    </Post>
  );
};

export default BlogPost;
