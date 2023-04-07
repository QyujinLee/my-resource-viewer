import React from 'react';
import styled from 'styled-components';

type IframeProps = {
  src: string;
};

export default function IframeContainer({ src }: IframeProps) {
  return <Iframe src={src} />;
}

const Iframe = styled.iframe`
  position: relative;
  top: 50px;
  width: 100%;
  height: calc(100vh - 55px);
  border: none;
`;
