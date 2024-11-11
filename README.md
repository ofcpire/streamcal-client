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
<br>![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

### 기타

- Highcharts.js
  - Streamcal 페이지에서 타임라인과 카테고리별 시간을 표시하는데 사용됩니다.

## 주요 기능

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

## 폴더 구조

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
