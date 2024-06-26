import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #007bff;
  padding: 20px;
  text-align: center;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  color: #fff;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add">Add Post</NavLink>
    </Nav>
  );
};

export default Header;
