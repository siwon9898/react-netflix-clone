import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <div>Footer</div>;
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;
