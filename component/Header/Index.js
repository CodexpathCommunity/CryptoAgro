import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderLinkContainer,
  HeaderLinks,
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
        <HeaderLinks>About</HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
