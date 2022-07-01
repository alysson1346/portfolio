import styled from "styled-components";

export const DivMainMenu = styled.div`
  display: flex;
  flex-direction: row;
  background-color: aliceblue;
  gap: 10px;
  font-size: 25px;
`;

export const TitleBanner = styled.h1`
  display: flex;
  font-weight: 700;
  color: #000;
  font-size: 45px;
  margin: 0px;
  @media (max-width: 1250px) {
    font-size: 40px;
  }
  @media (max-width: 1000px) {
    font-size: 35px;
  }
  @media (max-width: 900px) {
    font-size: 30px;
  }
  @media (max-width: 455px) {
    font-size: 20px;
  }
`;

export const TextBanner = styled.p`
  font-size: 30px;
  width: 700px;
  margin: 0px 0px 15px 0px;

  @media (max-width: 1250px) {
    font-size: 25px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
