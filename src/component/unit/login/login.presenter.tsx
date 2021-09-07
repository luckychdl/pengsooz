import { Wrapper, Title, GoogleLoginButton, MainImg } from "./login.styles";

export default function LoginUI(props) {
  return (
    <Wrapper>
      <Title> 팽수뭐해</Title>
      <GoogleLoginButton onClick={props.onClickEnterToWS}>
        sign in with Google
      </GoogleLoginButton>
      <MainImg />
    </Wrapper>
  );
}
