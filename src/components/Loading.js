import React from 'react';
import styled from 'styled-components';

function Loading() {
  return (
    <Loader></Loader>
  )
}

export default Loading;

export const Loader = styled.div`
  width:120px;
  height: 20px;
  margin: 2rem auto 1rem;
  -webkit-mask:linear-gradient(90deg,#000 70%,#0000 0) 0/20%;
  background:linear-gradient(orange 0 0) 0/0% no-repeat lightgray;
  animation:load 1.5s infinite steps(6);

  @keyframes load {
    100% {background-size:120%}
  }
`;
