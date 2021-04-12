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
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../../firebase";
import LoginModal from "./LoginModal";
import ProfileModal from "./ProfileModal";

function Header() {
  const [open, setOpen] = useState(false);
  const [openProfle, setOpenProfle] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <HeaderAvatar
            onClick={() => setOpenProfle(true)}
            src={user.photoURL}
          />
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

        <Modal
          open={openProfle}
          onClose={() => setOpenProfle(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ProfileModal setOpen={setOpenProfle} />
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
