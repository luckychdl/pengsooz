import LoginUI from "./login.presenter";
import { useRouter } from "next/router";

export default function Login() {
	const router = useRouter();

	const onClickEnterToWS = () => {
		router.push(`/workspace`);
	};

	return (
		<div>
			<LoginUI onClickEnterToWS={onClickEnterToWS} />
		</div>
	);
}
