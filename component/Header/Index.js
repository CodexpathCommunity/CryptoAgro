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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    alignItems: "center",
    flexDirection: " column",
  },
}));

function Header() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
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

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <LoginHeader>Login to continue</LoginHeader>
      <HeadeBtn onClick={signIn}>Continue With Google </HeadeBtn>
    </div>
  );
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
          {body}
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
