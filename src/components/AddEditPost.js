import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts, savePosts } from '../utils/localStorage';

const Form = styled.form`
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  font-size: 1em;
  &:hover {
    background: #0056b3;
  }
`;

const AddEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', author: '', summary: '', content: '', date: '' });

  useEffect(() => {
    if (id) {
      const posts = getPosts();
      setPost(posts[id]);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = getPosts();
    if (id) {
      posts[id] = post;
    } else {
      posts.push(post);
    }
    savePosts(posts);
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="title" value={post.title} onChange={handleChange} placeholder="Title" required />
      <Input type="text" name="author" value={post.author} onChange={handleChange} placeholder="Author" required />
      <Textarea name="summary" value={post.summary} onChange={handleChange} placeholder="Summary" required />
      <Textarea name="content" value={post.content} onChange={handleChange} placeholder="Content" required />
      <Input type="date" name="date" value={post.date} onChange={handleChange} required />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default AddEditPost;
