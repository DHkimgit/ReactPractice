import React from 'react'
import { useSearchParams } from 'react-router-dom';

const About = ({location}) => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true'; //쿼리의 파싱 결과 값은 문자열이다.
  return (
    <div>
        <h1>소개</h1>
        <p>이 프로젝트는 리액트 랑터 기초를 실습해 보는 예제 프로젝트 입니다.</p>
        {detail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};
// https://dtakamirr.run.goorm.io/About?detail=true 일로 접속
// 또 책에 오류가 있다. 이런...
// qs 라이브러리는 갖다 버리고 react-router-dom이 v6 이니 대신 useSearchParams을 사용했다.
// import { useSearchParams } from 'react-router-dom';
// const [searchParams] = useSearchParams();
// const detail = searchParams.get('detail') === 'true';
// qs 없이 편하게 쿼리 스트링을 가지고 올 수 있다.
export default About;