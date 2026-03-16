import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  return (
    <Result
      status='404'
      title='404'
      subTitle='对不起，您访问的页面不存在。'
      extra={
        <a type='primary' onClick={backHome}>
          返回首页
        </a>
      }
    />
  );
};

export default Page404;