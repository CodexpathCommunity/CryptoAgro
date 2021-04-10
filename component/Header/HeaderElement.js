import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;
export const HeaderContent = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 50px auto 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 3px solid blue;
`;
export const HeaderRight = styled.div`
  flex: 0.3;
  background: red;
  height: 100%;
  border-radius: 30px 30px 0 0;
`;
export const HeaderCenter = styled.div`
  flex: 0.4;
  background: yellowgreen;
  height: 100%;
  border-radius: 0 0 30px 30px;
`;
export const HeaderLeft = styled.div`
  flex: 0.3;
  background: green;
  height: 100%;
  border-radius: 30px 30px 0 0;
`;
export const HeaderRule = styled.div``;
