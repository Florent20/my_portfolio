export function Footer() {
    return (
        <footer className="border-t border-white/5 py-12">
            <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
                <div>© {new Date().getFullYear()} Bwam Louis-Florent. All rights reserved.</div>
                <div className="flex gap-6">
                    <a href="https://github.com/Florent20" className="hover:text-white">GitHub</a>
                    <a href="https://linkedin.com/in/louisflorent" className="hover:text-white">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}