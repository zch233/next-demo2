import React from 'react';
import {NextPage} from 'next';
import styled from 'styled-components';

const Post = () => {
  const Button = styled.span`
    color: #c03;
    span {
      color: green;
      user-select: none;
    }
  `
  return (
    <div className="container">
      <div>Post</div>
      <Button><span>123</span></Button>
    </div>
  )
}
export default Post
