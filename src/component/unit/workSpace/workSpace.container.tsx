import WorkSpaceUI from "./workSpace.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function WorkSpace() {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const onClickEnterToBaord = () => {
		router.push(`/workSpace/board`);
	};

	const onClickLogOut = () => {
		setIsOpen(true);
	};

	const onClickSelectorModal = () => {
		setIsOpen(true);
	};
	return (
		<div>
			<WorkSpaceUI
				onClickEnterToBaord={onClickEnterToBaord}
				onClickLogOut={onClickLogOut}
				onClickSelectorModal={onClickSelectorModal}
				setIsOpen={setIsOpen}
				isOpen={isOpen}
			/>
		</div>
	);
}
