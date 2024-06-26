import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPost';
import AddEditPost from './components/AddEditPost';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <AppContainer>
          <Routes>
            <Route path="/" element={<BlogPostList />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/add" element={<AddEditPost />} />
            <Route path="/edit/:id" element={<AddEditPost />} />
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
};

export default App;
