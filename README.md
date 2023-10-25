# Crypto Coin Tracker

## 🙋‍♂️ 프로젝트 소개

### TypeScript + React를 사용해 암호화폐 목록과 시세를 보여주는 사이드 프로젝트입니다.

## 🛠 개발환경

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/> <img src="https://img.shields.io/badge/ApexCharts-00e396?style=flat-square"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white"/>
<br>

### ⛓ node_modules

| 모듈명           | 용도                |
| ---------------- | ------------------- |
| axios            | 서버 통신           |
| react-rotuer-dom | 라우팅 구현         |
| react-query      | Data Fetching 관리  |
| react-Helmet     | title 메타테그 설정 |
| apexcharts       | 차트 시각화         |

<br>

## 주요 기능

### useQuery 사용

메인 페이지에서 가장 많이 거래되는 코인 목록 top 50을 받아옵니다.
fetcher 함수 생성후 React-Query에서 제공하는 useQuery Hook을 사용해 API 데이터를 받아옵니다.<br>
클릭 시 해당 암호화폐의 상세페이지로 이동하며 React-Query사용으로 반복적인 비동기 데이터 호출을 방지하여 페이지를 되돌아가도 이미 불러온 API를 re-fetch하지 않습니다.

<div style="text-align: center;">
    <img src="https://velog.velcdn.com/images/sj_yun/post/26822004-1b64-4edb-80f1-3eec06507ea7/image.png" >
</div>

### 다크모드/라이트모드 구현

ThemeProvide 와 Recoil을 사용해 다크모드 상태를 전역에서 관리하여 prop drilling을 방지하였습니다.

<div style="display: flex; justify-content: center;">
  <img src="https://github.com/junny97/CoinTracker/assets/72855681/4b44ae86-f4b0-4fdb-9acd-9ee36211d296" alt="다크모드" width="400" style="margin-right: 10px;">
  <img src="https://github.com/junny97/CoinTracker/assets/72855681/b16f2967-c1ee-4c37-a6bb-e9403472b011" alt="라이트" width="400">
</div>
<br>

### [상세 페이지]

홈에서 선택한 해당 코인의 상세 정보를 확인할 수 있습니다.
코인 정보들을 시각화한 'Chart'와 'Price' 페이지를 볼 수 있습니다.

### Chart

<img src="https://github.com/junny97/CoinTracker/assets/72855681/4b44ae86-f4b0-4fdb-9acd-9ee36211d296" alt="다크모드">

<br>
차트 시각화 라이브러리인 ApexChart.js를 사용해 API로부터 가져온 데이터를 캔들차트로 시각화 하였습니다.

### Price

![스크린샷 2023-10-24 오후 4 33 33](https://github.com/junny97/CoinTracker/assets/72855681/9b8a50e9-3816-4c8f-a351-b6bf7a4dc7cb)

일주일간 시장 가격 변동, 24시간 거래량, 24시간 동안의 시가 총액 변화, 역대 최고가, 역대 최고가와 현재 가격에 대한 백분율 차이를 담은 가격표입니다.<br>
하향가 퍼센트와 상향가 퍼센트 색을 다르게 설정하여 직관적으로 하향/ 상향과의 차이를 볼 수 있게 설정했습니다.

<hr>

### 🛠 프로젝트 관리

- <a href="https://github.com/junny97/CoinTracker/issues">GitHub Issue</a>
  - 빠른 issue 생성을 위해 issue 템플릿을 만들어 사용하였습니다.
  - issue label을 생성하여 어떤 작업을 히는지 구분하였습니다.
  - issue를 통해 구현할 내용과 체크리스트를 만들어 어떤 작업을 할지 리스트 만들어 관리하였습니다.

<img width="1200" alt="스크린샷 2023-10-24 오후 5 25 08" src="https://github.com/junny97/CoinTracker/assets/72855681/a08e15bd-6f2f-405e-8b2d-5fe28ecb9b0c">

<hr>

### 📃 커밋 메시지 컨벤션

| 타입     | 설명                                                    |
| -------- | ------------------------------------------------------- |
| Feat     | 새로운 기능 추가                                        |
| Fix      | 버그 수정                                               |
| Style    | CSS 등 사용자 UI 디자인 변경                            |
| Refactor | 코드 리팩토링 (더 효율적인 코드로 변경 등)(기능은 동일) |
| Chore    | 라이브러리 설치, 패키지 매니저 수정                     |
| Docs     | 리드미 등 문서 수정                                     |
