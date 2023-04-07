import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import ContentBox from './SideBarItems/ContentBox';
import { contentsList } from '../store/store';
import { useRecoilState } from 'recoil';
import { ContentType } from '../types/ContentType';
import { useToast } from '../hooks/useToast';
import { TOAST_MSG } from '../constants/const';

type UrlResult = {
  isYouTubeUrl: boolean;
  origin: string;
  converted: string;
};

export default function SideBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShowInput, setIsShowInput] = useState<boolean>(false);
  const [contents, setContents] = useRecoilState(contentsList);

  /**
   * youtube Url 검증 및 변경된 결과값 반환
   * @param url
   * @returns
   */
  const convertToEmbeddedURL = (url: string): UrlResult => {
    let result = {
      isYouTubeUrl: false,
      origin: url,
      converted: url,
    };

    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;

    if (videoId) {
      result = {
        ...result,
        isYouTubeUrl: true,
        converted: `https://www.youtube.com/embed/${videoId}`,
      };
    }

    return result;
  };

  /**
   * 컨텐츠 추가
   * @param param0
   */
  const addContents = ({
    type,
    resourceName,
    resourceValue,
  }: Pick<ContentType, 'type' | 'resourceName' | 'resourceValue'>) => {
    if (Math.random() < 0.8) {
      const min = 300;
      const max = 1000;
      const delay = Math.floor(Math.random() * (max - min + 1) + min);

      setTimeout(() => {
        setContents([
          ...contents,
          {
            id: uuidv4(),
            type,
            resourceName,
            resourceValue,
          },
        ]);

        useToast({ type: 'success', message: TOAST_MSG.CREATE_SUCCESS });
      }, delay);
    } else {
      useToast({ type: 'error', message: TOAST_MSG.CREATE_STOCHASTIC_ERROR });
    }
  };

  /**
   * URL 추가 클릭 핸들러
   */
  const handleClickAddUrl = () => {
    if (!isShowInput) {
      setIsShowInput(true);
    }
  };

  /**
   * 이미지 추가 클릭 핸들러
   */
  const handleClickAddImg = () => {
    useToast({ type: 'error', message: TOAST_MSG.CREATE_ERROR });
  };

  /**
   * URL 인풋 blur 핸들러
   */
  const handleBlurInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setIsShowInput(false);
  };

  /**
   * URL 인풋 Enter입력 핸들러
   * @param e
   */
  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !inputRef.current) return;

    const urlRegex: RegExp = /^https?:\/\//i;
    const value = _.cloneDeep(inputRef.current.value);

    if (urlRegex.test(value)) {
      // 유튜브 url인지 확인하고 embeded 형식으로 변경
      const urlValue = convertToEmbeddedURL(value);

      addContents({
        type: 'url',
        resourceName: urlValue.origin,
        resourceValue: urlValue.converted,
      });
    } else {
      useToast({ type: 'error', message: TOAST_MSG.CREATE_ERROR });
    }

    // 초기화
    inputRef.current.value = '';
    setIsShowInput(false);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isShowInput]);

  return (
    <SideBarWrap>
      <SideBarHeader>
        <SideBarHeaderButton onClick={handleClickAddUrl}>URL 추가</SideBarHeaderButton>
        <SideBarHeaderButton onClick={handleClickAddImg}>이미지 추가</SideBarHeaderButton>
      </SideBarHeader>
      {isShowInput && (
        <InputBox>
          <InputUrl ref={inputRef} onBlur={handleBlurInput} onKeyUp={handleKeyUpInput}></InputUrl>
        </InputBox>
      )}
      <Contents>
        {contents.map((item) => (
          <ContentBox key={item.id} {...item} />
        ))}
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
  z-index: 1;
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

const InputBox = styled.div`
  position: fixed;
  left: 10px;
  top: 44px;
  width: 260px;
  height: 40px;
  padding: 5px;
  background-color: var(--color-white);
  border: 1px solid var(--color-dark-white);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 2;
`;

const InputUrl = styled.input`
  width: 100%;
  height: 100%;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  background-color: var(--color-light-gray);
  border: none;
  &:focus {
    outline: none;
    border: 1px solid var(--color-blue);
    border-radius: 3px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 5px 0px;
`;
