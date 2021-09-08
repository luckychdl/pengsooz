import { Wrapper, Title, MainImg } from "./login.styles";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export default function LoginUI(props) {
  return (
    <Wrapper>
      <Title>팽수뭐해</Title>
      <MainImg />
      <StyledFirebaseAuth
        uiConfig={props.uiConfig}
        firebaseAuth={props.firebaseAuth}
      />
    </Wrapper>
  );
}
