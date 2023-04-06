import React from 'react';
import styled from 'styled-components';
import ContentBox from './SideBarItems/ContentBox';

export default function SideBar() {
  return (
    <SideBarWrap>
      <SideBarHeader>
        <SideBarHeaderButton>URL 추가</SideBarHeaderButton>
        <SideBarHeaderButton>이미지 추가</SideBarHeaderButton>
      </SideBarHeader>
      <Contents>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </Contents>
    </SideBarWrap>
  );
}

const SideBarWrap = styled.aside`
  height: 100vh;
  width: 280px;
  border-right: 1px solid var(--color-gray);
  background-color: var(--color-light-gray);
  display: flex;
  flex-direction: column;
`;

const SideBarHeader = styled.div`
  width: 100%;
  padding: 10px;
  background-color: var(--color-white);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideBarHeaderButton = styled.button`
  width: 125px;
  height: 30px;
  background-color: var(--color-white);
  border: 1px solid var(--color-dark-white);
  border-radius: 5px;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
