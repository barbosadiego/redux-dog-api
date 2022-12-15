import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <StyledLoading>
      <div></div>
    </StyledLoading>
  );
};

export default Loading;

const rotate = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);

  div {
    width: 50px;
    height: 50px;
    border: 10px solid black;
    border-radius: 50%;
    border-right-color: transparent;
    animation: ${rotate} 1.5s linear infinite;
  }
`;
