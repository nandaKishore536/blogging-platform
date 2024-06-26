import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts, savePosts } from '../utils/localStorage';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const PostCard = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const PostTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const PostMeta = styled.p`
  font-size: 0.9em;
  color: #666;
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 150px); /* Adjust height as needed */
  background-color: #f0f0f0;
  text-align: center;
`;

const AddBlogButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  &:hover {
    background-color: #0056b3;
  }
`;

const BlogPostList = () => {
  const posts = getPosts();

  const deletePost = (index) => {
    const posts = getPosts();
    posts.splice(index, 1);
    savePosts(posts);
    window.location.reload(); // Temporary solution, consider better state management
  };

  return (
    <div>
      {posts.length === 0 ? (
        <EmptyContainer>
          <p>No blog posts available</p>
          <AddBlogButton to="/add">Add Blog</AddBlogButton>
        </EmptyContainer>
      ) : (
        <List>
          {posts.map((post, index) => (
            <PostCard key={index}>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>by {post.author} on {post.date}</PostMeta>
              <p>{post.summary}</p>
              <PostActions>
                <Link to={`/post/${index}`}>
                  <ActionButton>View</ActionButton>
                </Link>
                <Link to={`/edit/${index}`}>
                  <ActionButton>Edit</ActionButton>
                </Link>
                <ActionButton onClick={() => deletePost(index)}>Delete</ActionButton>
              </PostActions>
            </PostCard>
          ))}
        </List>
      )}
    </div>
  );
};

export default BlogPostList;
