import React from 'react';
import styled from 'styled-components';
import { TypedIcon } from 'typed-design-system';

export default function Viewer() {
  return (
    <ViewerWrap>
      <ViewerHeader>
        <ResourceName>https://www.youtube.com/watch?v=M-6R6-C6DnI</ResourceName>
        <TypedIcon icon="close_19" />
      </ViewerHeader>
    </ViewerWrap>
  );
}

const ViewerWrap = styled.section`
  height: 100vh;
  background-color: var(--color-white);
  flex-grow: 1;
`;

const ViewerHeader = styled.div`
  padding: 0px 17px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ResourceName = styled.p`
  font-weight: var(--weight-regular);
  font-size: var(--font-semi-small);
`;
