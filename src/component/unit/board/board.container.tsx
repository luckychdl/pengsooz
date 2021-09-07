import { useState } from "react";
import BoardUI from "./board.presenter";
import { useRouter } from "next/router";

export default function Board() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const onClickCreateBoardModal = () => {
		setIsOpen(true);
	};

	const onClickEnterToWS = () => {
		router.push(`/workSpace`);
	};

	return (
		<div>
			<BoardUI
				isOpen={isOpen}
				onClickCreateBoardModal={onClickCreateBoardModal}
				setIsOpen={setIsOpen}
				onClickEnterToWS={onClickEnterToWS}
			/>
		</div>
	);
}
