import {
  HeaderCenter,
  HeaderContainer,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
} from "./HeaderElement";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderRight>this</HeaderRight>
        <HeaderCenter>this </HeaderCenter>
        <HeaderLeft>this</HeaderLeft>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
