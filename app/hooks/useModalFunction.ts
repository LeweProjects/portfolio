import React, { useState } from "react";

const useModalFunction = () => {
	const [isProjectModalOpen, setProectModal] = useState(false);

	return { isProjectModalOpen, setProectModal };
};

export default useModalFunction;
