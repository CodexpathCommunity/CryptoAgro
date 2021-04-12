import { Button, Avatar } from "@material-ui/core";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 4px solid whitesmoke;
`;
export const HeaderContent = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 60px;
`;
export const HeaderLogo = styled.h2`
  font-family: "Saira Stencil One";
  font-weight: 800;
  font-size: 35px;
  margin-right: 55px;
`;
export const HeaderLinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const HeaderLinks = styled.h3`
  font-size: 18px;
  font-weight: 400;
  padding: 0 35px 0 0;
`;
export const HeadeBtn = styled(Button)`
  text-transform: inherit !important ;
  padding: 5px 15px 5px 15px !important ;
  border-radius: 15px !important ;
  border: 1px solid black !important ;
  font-weight: 1000 !important ;
`;
export const HeaderAvatar = styled(Avatar)``;

export const AvatarContainer = styled.div`
  padding: 15px;
  background: var(--grayTheme);
  border-radius: 999px;
  border: 2px solid var(--boldTheme);
`;
export const ProfileAvatar = styled(Avatar)`
  height: 80px !important;
  width: 80px !important;
`;
export const LoginHeader = styled.h2`
  margin-bottom: 35px;
`;

export const ProfileHeader = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 20px;
`;

export const HeaderRule = styled.div``;
