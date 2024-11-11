# STREAMCAL(클라이언트)

## 개요

STREAMCAL 프로젝트는 네이버의 게임 스트리밍 플랫폼인 [치지직(chzzk.naver.com)](https://chzzk.naver.com/)에서의 방송 기록들을 수집하고, 스트리머별, 날짜별, 카테고리별 등 다양한 분류를 사용해해 보기 편리하게 제공하는 웹 사이트입니다.

STREAMCAL의 클라이언트와 서버는 오픈 소스이며 영리를 추구하지 않습니다.

## 배포

[STREAMCAL 바로가기](https://streamcal.ch/)

STREAMCAL의 클라이언트는 netlify를 이용해 배포 중입니다.

## 스택

### 주요 스택

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
<br>![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)<br>
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

### 기타

- Highcharts.js
  - Streamcal 페이지에서 타임라인과 카테고리별 시간을 표시하는데 사용됩니다.

## 페이지 목록

- 채널 리스트
  - 일정 팔로워 이상의 치지직 스트리머 목록을 조회하고 상세 스트리머 로그 페이지로 이동할 수 있습니다.
- STREAMCAL
  - 스트리머의 날짜별, 월별 로그를 조회할 수 있는 페이지입니다.
- 카테고리 리스트
  - 스트리머들이 치지직에서 사용했던 카테고리들을 조회할 수 있습니다.
- 상세 카테고리
  - 최근에 해당 카테고리를 사용한 스트리머의 목록을 조회할 수 있습니다.
- 에러 페이지
  - 모달을 통해 핸들링 불가능한 에러(없는 페이지 조회 시도 등)의 경우 표시됩니다.

## 주요 기능

### ChannelPage

- 스트리머 목록에서 검색을 할 수 있으며 가나다 순서 혹은 역순으로 표시할 수 있습니다.
- 즐겨찾기 한 스트리머가 상단에 표시됩니다.

### StreamcalPage

- 스트리머를 즐겨찾기하거나 취소할 수 있습니다.
- 현재 날짜로부터 기록 수집 시작일까지 일별 및 월별로 선택 가능합니다.
- 일별, 월별 선택은 탭을 이용하여 직관적으로 표현했습니다.
- 일별 탭에선 스트리머의 스트리밍 기록을 Highcharts를 이용해 타임라인으로 볼 수 있습니다.
- 일별 탭에서 스트리머의 스트리밍 기록을 텍스트로 볼 수 있으며 변경 사항(타이틀, 카테고리, 방송 on/off)를 표시했습니다.
- 일별 로그의 카테고리를 클릭하면 해당 CategoryDetailPage로 이동합니다.
- 월별 탭에서는 스트리머의 스트리밍 기록을 달력 형태로 볼 수 있습니다.
- 스트리머의 카테고리별 플레이 시간을 Highcharts를 이용해 막대 차트로 나타냈습니다.
- url을 이용해 특정 일자 혹은 월의 데이터로 바로 이동할 수 있어 다른 사람에게 쉽게 공유할 수 있습니다.

### 카테고리

- CategoryListPage
- 카테고리 목록을 페이지로 조회할 수 있습니다.
- 검색으로 특정 카테고리를 찾을 수 있습니다.
- CategoryDetailPage
  - 해당 카테고리를 플레이한 스트리머를 클릭해 해당 일자로 바로 이동할 수 있습니다.

### 공용

- 반응형 디자인으로 모바일과 데스크탑 해상도에서 편리하게 사용할 수 있습니다.
- 다크모드를 헤더에서 선택 가능합니다.
- 즐겨찾기 추가, 취소 등 이벤트 발생 시 토스트 메시지가 표시됩니다.
- 페이지 및 데이터 로드 시 적절한 스켈레톤 UI을 표시하여 로딩 중임을 직관적으로 표시했습니다.
- 서버와의 연결이 실패할 경우 상황에 맞는 에러 모달이 표시되며 연결 재시도가 가능합니다.
- React query를 이용해 서버로부터 데이터가 자동으로 갱신됩니다.
- 메뉴는 pc환경에선 헤더 안에, 모바일에선 메뉴 모달에 표시했으며 페이지를 이동 가능합니다.

## 프로젝트 구조

```
src
├─components
│  ├─category
│  │  ├─categoryDetailPage
│  │  └─categoryListPage
│  ├─channelPage
│  ├─global
│  └─streamcalPage
│      ├─Daily
│      └─Monthly
├─hooks
├─lib
│  ├─api
│  │  └─category
│  ├─localStorage
│  └─utils
│      └─streamcal
│          ├─daily
│          └─monthly
├─pages
└─types

```

- components: 각 페이지에 쓰이는 컴포넌트를 위한 폴더입니다.
  - category: /category 경로 아래의 페이지에 쓰이는 컴포넌트입니다.
    - categoryDetailPage: CategoryDetailPage에 쓰이는 컴포넌트입니다.
    - categoryListPage: CategoryListPage에 쓰이는 컴포넌트입니다.
  - channelPage: ChannelPage에 쓰이는 컴포넌트입니다.
  - global : Header, Footer 등 여러 페이지가 공유하는 컴포넌트 폴더입니다.
  - streamcalPage: StreamcalPage에 쓰이는 컴포넌트입니다.
    - Daily: 일별 로그 컴포넌트입니다.
    - Monthly: 월별 로그 컴포넌트입니다.
- hooks: 리액트 커스텀 hook을 위한 폴더입니다.
- lib: 따로 분리가 필요한 코드 혹은 반복적으로 사용되는 코드 폴더입니다.
  - api: axios 인스턴스 및 함수 폴더입니다.
  - localStorage: 브라우저 localStorage를 사용하는 함수 폴더입니다.
  - utils: 공용으로 사용 가능한 순수 함수 폴더입니다.
- pages: React router에서 직접 사용되는 페이지 컴포넌트를 위한 폴더입니다.
- types: Typescript 타입 정의를 위한 폴더입니다.

##
