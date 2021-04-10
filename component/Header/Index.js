import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderLinkContainer,
  HeaderLinks,
  HeadeBtn,
} from "./HeaderElement";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>CryptoAgro</HeaderLogo>
        <HeaderLinkContainer>
          <HeaderLinks>About</HeaderLinks>
          <HeaderLinks>About</HeaderLinks>
          <HeaderLinks>About</HeaderLinks>
          <HeaderLinks>About</HeaderLinks>
          <HeaderLinks>About</HeaderLinks>
        </HeaderLinkContainer>
        <HeadeBtn>Sign-In</HeadeBtn>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
