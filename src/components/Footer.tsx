import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/10 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-center gap-2 opacity-50">
          <Sparkles className="h-4 w-4 text-indigo-400" />
          <span className="text-sm font-semibold tracking-widest text-slate-200">
            GINGA FES 2026
          </span>
          <Sparkles className="h-4 w-4 text-indigo-400" />
        </div>
        <p className="text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} ぎんが祭実行委員会. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
