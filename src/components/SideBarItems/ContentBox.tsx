import React from 'react';
import styled from 'styled-components';
import { TypedIcon } from 'typed-design-system';

export default function ContentBox() {
  return (
    <ContentWrap>
      <ResourceName>https://www.youtube.com/watch?v=M-6R6-C6DnI</ResourceName>
      <ButtonWrap>
        <TypedIcon icon="edit_19" />
        <TypedIcon icon="trash_19" />
      </ButtonWrap>
    </ContentWrap>
  );
}

const ContentWrap = styled.article`
  margin: 10px 10px 0px 10px;
  background-color: var(--color-white);
  height: 90px;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResourceName = styled.p`
  font-weight: var(--weight-regular);
  font-size: var(--font-semi-small);
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
