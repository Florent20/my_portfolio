"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setDone(true), 1800);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-ink-950 flex items-center justify-center"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xs uppercase tracking-[0.4em] text-white/50"
                        >
                            Your Name
                        </motion.div>
                        <motion.div
                            className="mt-4 h-[1px] bg-white/10 w-48 overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-accent"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}