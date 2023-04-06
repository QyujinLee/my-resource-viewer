import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import ContentBox from "./SideBarItems/ContentBox";

export default function SideBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShowInput, setIsShowInput] = useState<boolean>(false);

  /**
   * URL 추가 클릭 이벤트
   */
  const handleClickAddUrl = () => {
    if (!isShowInput) {
      setIsShowInput(true);
    }
  };

  /**
   * 이미지 추가 클릭 이벤트
   */
  const handleClickAddImg = () => {};

  /**
   * URL 인풋 blur 이벤트
   */
  const handleBlurInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setIsShowInput(false);
  };

  /**
   * URL 인풋 Enter입력 이벤트
   * @param e
   */
  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("아이템 등록");

      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setIsShowInput(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isShowInput]);

  return (
    <SideBarWrap>
      <SideBarHeader>
        <SideBarHeaderButton onClick={handleClickAddUrl}>
          URL 추가
        </SideBarHeaderButton>
        <SideBarHeaderButton onClick={handleClickAddImg}>
          이미지 추가
        </SideBarHeaderButton>
      </SideBarHeader>
      {isShowInput && (
        <InputBox>
          <InputUrl
            ref={inputRef}
            onBlur={handleBlurInput}
            onKeyUp={handleKeyUpInput}
          ></InputUrl>
        </InputBox>
      )}
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
