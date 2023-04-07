import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import { ContentType } from '../types/ContentType';

type ContentsListType = ContentType[];

/**
 * viewer 노출 여부
 */
export const isShowViewer = atom<boolean>({
  key: 'isShowViewer',
  default: false,
});

/**
 * 컨텐츠 목록
 */
export const contentsList = atom<ContentsListType>({
  key: 'contentsList',
  default: [
    {
      id: uuidv4(),
      type: 'url',
      resourceName: 'https://www.robinwieruch.de/react-libraries/',
      resourceValue: 'https://www.robinwieruch.de/react-libraries/',
    },
    {
      id: uuidv4(),
      type: 'url',
      resourceName:
        'https://typed.do/blog-kr/how-to-make-good-usability-product/',
      resourceValue:
        'https://typed.do/blog-kr/how-to-make-good-usability-product/',
    },
  ],
});

/**
 * 선택된 컨텐츠
 */
export const selectedContent = atom<ContentType | null>({
  key: 'selectedContent',
  default: null,
});
