import { Wrapper, Title, MainImg } from "./login.styles";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export default function LoginUI(props: any) {
  return (
    <Wrapper>
      <MainImg src="/images/loading.gif" />
      <Title>PENGLELLO</Title>
      <StyledFirebaseAuth
        uiConfig={props.uiConfig}
        firebaseAuth={props.firebaseAuth}
      />
    </Wrapper>
  );
}
