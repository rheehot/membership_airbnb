<h1 align="center">membership-airbnb</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="example.com" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
    <a href="https://github.com/aereeeee/membership-airbnb/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> 부스트캠프 멤버십 에어비엔비 예약 서비스 구현하기

#### DEMO http://106.10.41.137/

## Backend
---
### DB 모델링

테이블 정보
https://github.com/connect-foundation/membership-airbnb/pull/74
  
### 캐싱 전략
  
**숙소 검색 시 `pagination`에 캐싱 구현**
- page를 key로 가지고 해당하는 숙소 데이터를 value로 가짐
- page별 데이터를 캐싱하고 새로고침시 DB와 동기화하는 방식
- 검색 시 검색 옵션이 key로 함께 사용되어야함
  - 검색 옵션 별 숙소 데이터는 자주 접근하는 데이터가 아님
  - 동기화가 자주 이루어져야함
  - 이미 페이지네이션을 통해 DB 요청 부담을 줄이고 있음
- 따라서 PASS
 
**숙소 상세 조회에 캐싱 구현**
- 숙소 Id를 key로 사용
- redis 캐시 DB에 숙소 아이디로 조회
  - MISS : mysql DB 조회 - 캐싱(만료시간 짧게 설정), 응답
  - HIT : 캐시 데이터 응답

### Batch job
```
* /server/batch/csv폴더에 파일 insert
yarn batch 
```

---

## Install

```sh
yarn install
```

## Usage

```sh
yarn start
```


## Author

**aeree cho**

- Github: [@aereeeee](https://github.com/aereeeee)

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/aereeeee/membership-airbnb/issues).

## License

Copyright © 2019 [aeree cho](https://github.com/aereeeee)
