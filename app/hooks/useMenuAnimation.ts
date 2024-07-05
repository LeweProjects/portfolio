import { useEffect } from "react";
import { useAnimate } from "framer-motion";

export default function useMenuAnimation(isOpen: boolean) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate([
			[
				"path.top",
				{ d: isOpen ? "M 6 16.5 L 19 2.5" : "M 2 2.5 L 20 2.5" },
				{ at: "<" },
			],
			["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
			[
				"path.bottom",
				{ d: isOpen ? "M 6 2.5 L 19 16.346" : "M 2 16.346 L 20 16.346" },
				{ at: "<" },
			],
		]);
	}, [animate, isOpen]);

	return scope;
}
