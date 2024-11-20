import { useState, useEffect } from "react";
import styled from "styled-components";

const DivBox = styled.div`
  width: 300px;
  height: 400px;
  padding: 20px;
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
    userName: "천지훈",
    job: "ss",
    company: "sa",
    company_addr: "sda",
    email: "1000won@gmail.com",
    phone: "sda",
  },
];

const User = ({ user }) => {
  return (
    <DivBox>
      <p>이름 : {user.userName}</p>
      <p>직책 : {user.job}</p>
      <p>회사명 : {user.company}</p>
      <p>회사주소 : {user.company_addr}</p>
      <p>이메일 : {user.email}</p>
      <p>전화번호 : {user.phone}</p>
    </DivBox>
  );
};
const PrintList = () => {
  return (
    <>{data && data.map((user, index) => <User key={index} user={user} />)}</>
  );
};

export default PrintList;
