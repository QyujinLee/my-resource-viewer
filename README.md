# MY-RESOURCE-VIEWER

## 실행방법

- `yarn` 실행하여 node_modules 설치
- `yarn run dev` 실행하여 프로젝트 run
- http://localhost:5173 에서 확인 가능합니다.

## 참고사항

- **typed-design-system** 패키지에서 참조되는 **@emotion/core** 패키지의 이름이 11버젼부터 **@emotion/react**로 변경되었습니다.
- 따라서 현재 프로젝트에서는 10.1.1 버전의 **@emotion/core**를 의존성으로 추가해놓은 상태이며 **@emotion/core**의 최신 버젼을 설치 시에는 빌드 시 오류 발생하기 때문에 **@emotion/react**를 설치하고 **_node_modules/typed-design-system/dist/index.mjs_** 에서 **@emotion/core** => **@emotion/react** 로 수정하여야 합니다.

<br/><br/><br/>

---

<br/><br/><br/>

# MY-RESOURCE-VIEWER 구현 세부 사항

## URL 추가 및 이미지 추가

- URL은 'http://' 또는 'https://' 로 시작하는 문자열만 등록 가능하도록 구현하였으며,<br/>
  등록 input에서 enter 입력 시 등록 됩니다.
- 좌측 컨텐츠 영역 사이드 바는 컨텐츠의 양이 많을 경우, 스크롤바로 제어할 수 있도록 하였습니다.

<br/><br/>

### 🧭 일반 URL 추가 시

![일반 URL 추가 시연](/public/gif/add_url_normal.gif)

<br/><br/><br/>

### 📹 Youtube URL 추가 시

![Youtube URL 추가 시연](/public/gif/add_url_youtube.gif)

> youtube의 공유하기 기능을 통해 얻게되는 url 또는 브라우저 상단에 나타나는 url 또는 <br/>임베디드 url 과 같이 어떤 형태의 url이어도 id를 추출하여 임베디드 url로 변환하도록 구현하였습니다.

<br/><br/><br/>

### 📷 이미지 추가 시

![이미지 추가 시연](/public/gif/add_img.gif)

<br/><br/><br/>

---

<br/>

## 리소스 등록 시 요구사항 구현

- 등록 시 80%의 확률로 등록 성공할 수 있도록 구현하였습니다.
- 300ms ~ 1000ms 의 랜덤 딜레이가 일어나도록 구현하였습니다.

```typescript
// SideBar.tsx - addContents 함수

if (Math.random() <= 0.8) {
  const min = 300;
  const max = 1000;
  const delay = Math.floor(Math.random() * (max - min + 1) + min);

  setTimeout(() => {
    // 컨텐츠 등록
    ...
    // 성공 토스트 노출
    ...
  }, delay);
} else {
  // 확률적 실패 토스트 노출
  ...
}
```

<br/><br/>

### 😓 확률적인 등록 실패 시

![확률적인 등록 실패 시연](/public/gif/add_error.gif)

<br/><br/><br/>

---

<br/>

## viewer 노출 및 닫기 제어

- 컨텐츠 선택 시 뷰어가 오픈되며, 오픈되어 있던 컨텐츠 삭제 시에는 뷰어도 함께 닫히도록 구현하였습니다.
- 컨텐츠를 변경하거나 뷰어를 닫거나 다시 열어도 정상적으로 작동합니다.

<br/><br/>

### 🎛️ 뷰어 컨트롤 시연

![뷰어 컨트롤 시연](/public/gif/control_viewer.gif)
