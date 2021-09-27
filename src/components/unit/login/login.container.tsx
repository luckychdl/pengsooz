import LoginUI from "./login.presenter";
import firebase from "../../../commons/firebase/firebase";

export default function Login() {
  const uiConfig = {
    signInSuccessUrl: "/workspace",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };
  return (
    <div>
      <LoginUI uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
