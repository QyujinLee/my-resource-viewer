import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { TypedIcon } from 'typed-design-system';

import { ContentType } from '../../types/ContentType';
import { contentsList, isShowViewer, selectedContent } from '../../store/store';

type ContentWrapProps = {
  isSelected: boolean;
};

export default function ContentBox({ id, type, resourceName, resourceValue }: ContentType) {
  const [isEditName, setIsEditName] = useState<boolean>(false);
  const [name, setName] = useState<string>(resourceName);
  const [contents, setContents] = useRecoilState(contentsList);
  const [selected, setSelected] = useRecoilState(selectedContent);
  const setIsShowViewer = useSetRecoilState(isShowViewer);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * content click 이벤트 핸들러
   */
  const handleClickContent = () => {
    setSelected({
      id,
      type,
      resourceName,
      resourceValue,
    });
    setIsShowViewer(true);
  };

  /**
   * 수정 버튼 클릭 핸들러
   */
  const handleClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsEditName(true);
  };

  /**
   * 삭제 버튼 클릭 핸들러
   */
  const handleClickRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setContents(contents.filter((item) => item.id !== id));

    if (selected?.id === id) {
      setSelected(null);
      setIsShowViewer(false);
    }
  };

  /**
   * input change 이벤트 핸들러
   * @param e
   * @returns
   */
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  /**
   * 컨텐츠 이름 변경
   * @param resourceName
   */
  const modifyResourceName = (resourceName: string) => {
    setContents(contents.map((item) => (item.id === id ? { ...item, resourceName } : item)));

    if (selected?.id === id) {
      setSelected({ ...selected, resourceName });
    }

    setIsEditName(false);
  };

  /**
   * input blur 이벤트 핸들러
   * @param e
   */
  const handleBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    modifyResourceName(e.currentTarget.value.trim());
  };

  /**
   * input Enter 입력 핸들러
   * @param e
   * @returns
   */
  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !inputRef.current) return;
    modifyResourceName(e.currentTarget.value.trim());
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditName]);

  return (
    <ContentWrap onClick={handleClickContent} isSelected={selected?.id === id}>
      {isEditName ? (
        <InputResourceName
          ref={inputRef}
          value={name}
          onChange={handleChangeInput}
          onBlur={handleBlurInput}
          onKeyUp={handleKeyUpInput}
        />
      ) : (
        <ResourceName>{resourceName}</ResourceName>
      )}
      <ButtonWrap>
        <IconWrap onClick={handleClickEdit}>
          <TypedIcon icon="edit_19" size={19} style={{ cursor: 'pointer' }} />
        </IconWrap>
        <IconWrap onClick={handleClickRemove}>
          <TypedIcon icon="trash_19" size={19} style={{ cursor: 'pointer' }} />
        </IconWrap>
      </ButtonWrap>
    </ContentWrap>
  );
}

const ContentWrap = styled.article`
  margin: 5px 10px 5px 10px;
  background-color: var(--color-white);
  height: 90px;
  padding: 12px;
  border: 1px solid var(--color-white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ isSelected }: ContentWrapProps) =>
    isSelected &&
    css`
      border: 1px solid var(--color-blue);
    `}
`;

const InputResourceName = styled.input`
  height: 30px;
  font-weight: var(--weight-regular);
  font-size: var(--font-semi-small);
  border-radius: 3px;
  outline: none;

  &:focus {
    background-color: var(--color-light-gray);
    border: 1px solid var(--color-blue);
  }
`;

const ResourceName = styled.p`
  font-weight: var(--weight-regular);
  font-size: var(--font-semi-small);
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IconWrap = styled.button`
  border: none;
  background-color: var(--color-white);
`;
