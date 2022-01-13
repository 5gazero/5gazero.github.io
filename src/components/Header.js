import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <LeftBox>
        <img src='././img/lemon.png' alt='lemon' style={{ width: 38 }} />
        <div className='content'>5gazero</div>
      </LeftBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 55px;
  background-color: #ffe802;
  border-bottom: 5px solid #000000;
  font-family: "Cafe24Ssurround";
  font-size: 30px;
`;

const LeftBox = styled.div`
  /* background-color: #353533; */
  width: 200px;
  height: 50px;
  /* text-align: center; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  /* img {
    vertical-align: middle;
  } */
  .content {
    margin: 3px 0 0 20px;
  }
`;

export default Header;
