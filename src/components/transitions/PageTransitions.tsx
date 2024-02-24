"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Pagetransition({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 0.75 }}
		>
			{children}
		</motion.div>
	);
}
