# MY-RESOURCE-VIEWER

## 실행방법

- `yarn` 실행하여 node_modules 설치
- `yarn run dev` 실행하여 프로젝트 run
- http://localhost:5173 에서 확인 가능합니다.

## 참고사항

- **typed-design-system** 패키지에서 참조되는 **@emotion/core** 패키지의 이름이 11버젼부터 **@emotion/react**로 변경되었습니다.
- 따라서 현재 프로젝트에서는 10.1.1 버전의 **@emotion/core**를 의존성으로 추가해놓은 상태이며 **@emotion/core**의 최신 버젼을 설치 시에는 빌드 시 오류 발생하기 때문에 **@emotion/react**를 설치하고 **_node_modules/typed-design-system/dist/index.mjs_** 에서 **@emotion/core** => **@emotion/react** 로 수정하여야 합니다.
