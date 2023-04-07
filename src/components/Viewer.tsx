import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { TypedIcon } from 'typed-design-system';

import { isShowViewer, selectedContent } from '../store/store';
import IframeContainer from './IframeContainer';

export default function Viewer() {
  const [selected, setSelected] = useRecoilState(selectedContent);
  const setIsShowViewer = useSetRecoilState(isShowViewer);

  /**
   * 닫기 버튼 클릭 이벤트 핸들러
   */
  const handleClickClose = () => {
    setSelected(null);
    setIsShowViewer(false);
  };

  return (
    <ViewerWrap>
      <ViewerHeader>
        <ResourceName>{selected?.resourceName}</ResourceName>
        <IconWrap onClick={handleClickClose}>
          <TypedIcon icon="close_19" style={{ cursor: 'pointer' }} />
        </IconWrap>
      </ViewerHeader>
      {selected && selected.type === 'url' && <IframeContainer src={selected.resourceValue} />}
      {selected && selected.type === 'img' && <Img src={selected.resourceValue} />}
    </ViewerWrap>
  );
}

const ViewerWrap = styled.article`
  height: 100vh;
  position: relative;
  background-color: var(--color-white);
  flex-grow: 1;
`;

const IconWrap = styled.button`
  border: none;
  background-color: var(--color-white);
`;

const ViewerHeader = styled.header`
  position: absolute;
  background-color: var(--color-white);
  padding: 0px 17px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const ResourceName = styled.p`
  font-weight: var(--weight-regular);
  font-size: var(--font-semi-small);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Img = styled.img`
  position: relative;
  top: 50px;
  max-width: 100%;
  max-height: calc(100vh - 55px);
`;
