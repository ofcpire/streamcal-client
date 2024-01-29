import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  const navToIndex = () => navigate('/');

  return (
    <section>
      <h1>잘못된 요청입니다.</h1>
      <button onClick={navToIndex}>돌아가기</button>
    </section>
  );
}
