import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { isShowViewer } from '../store/store';
import SideBar from './SideBar';
import Viewer from './Viewer';

export default function MainContainer() {
  const isVisibleViewer = useRecoilValue(isShowViewer);

  return (
    <MainWrap>
      <SideBar />
      {isVisibleViewer && <Viewer />}
    </MainWrap>
  );
}

const MainWrap = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
