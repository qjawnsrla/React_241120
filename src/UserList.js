import React, { useState } from "react";
import styled from "styled-components";

// 앱은 화면을 그려주는 리소스(버튼, input 박스 등등) 가 이미 폰에 설치되어있음
// 앱은 주로 시스템의 기능을 많이 사용하는 경우에 앱을 사용
// 앱은 화면을 그려주는 요소가 html, css 로 구성되어 있지 않음
// 웹으로 개발하면 배포가 자유로움, ios/안드로이드 동시 개발시 개발 부담이 적음

const DivBox = styled.div`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  background-color: orangered;
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid #ccc;
  color: white;
  font-size: 1.4em;
`;

const data = [
  {
    id: 100,
    userName: "천지훈",
    email: "1000won@gmail.com",
  },
  {
    id: 200,
    userName: "백마리",
    email: "2000won@gmail.com",
  },
  {
    id: 300,
    userName: "서민혁",
    email: "3000won@gmail.com",
  },
];

const User = ({ user }) => {
  return (
    <DivBox>
      <p>ID : {user.id}</p>
      <p>이름 : {user.userName}</p>
      <p>이메일 : {user.email}</p>
    </DivBox>
  );
};

// const User = (props) => {
//   return (
//     <div>
//       <p>ID : {props.user.id}</p>
//       <p>이름 : {props.user.userName}</p>
//       <p>이메일 : {props.user.email}</p>
//     </div>
//   );
// };

const UserList = () => {
  return (
    <>
      {data && data.map((user, index) => <User key={index} user={user} />)}

      {/* <User user={data[0]} />
      <User user={data[1]} />
      <User user={data[2]} /> */}
      {/* <div>
        <p>ID : {data[0].id}</p>
        <p>이름 : {data[0].userName}</p>
        <p>이메일 : {data[0].email}</p>
      </div>
      <div>
        <p>ID : {data[1].id}</p>
        <p>이름 : {data[1].userName}</p>
        <p>이메일 : {data[1].email}</p>
      </div>
      <div>
        <p>ID : {data[2].id}</p>
        <p>이름 : {data[2].userName}</p>
        <p>이메일 : {data[2].email}</p>
      </div> */}
    </>
  );
};

export default UserList;
