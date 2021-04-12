import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderLinkContainer,
  HeaderLinks,
  HeadeBtn,
  HeaderAvatar,
  LoginHeader,
} from "./HeaderElement";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../../firebase";
import LoginModal from "./LoginModal";

function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signIn = () => {
    setOpen(false);
    auth.signInWithPopup(provider).catch(alert);
  };

  const [user] = useAuthState(auth);

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
        {user ? (
          <HeaderAvatar onClick={() => auth.signOut()} src={user.photoURL} />
        ) : (
          <HeadeBtn type="button" onClick={handleOpen}>
            Sign-In
          </HeadeBtn>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <LoginModal setOpen={setOpen} />
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
