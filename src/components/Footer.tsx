import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white py-12 mt-20 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-6 flex items-center justify-center gap-3">
          <Zap className="h-6 w-6 text-orange-600 fill-orange-600" />
          <span className="text-xl font-black tracking-widest text-slate-900 border-b-4 border-blue-600 pb-1 -skew-x-12">
            GINGA FES <span className="text-blue-600">2026</span>
          </span>
          <Zap className="h-6 w-6 text-orange-600 fill-orange-600" />
        </div>
        
        <p className="text-center font-bold text-sm text-slate-600 bg-slate-100 p-2 border-2 border-black inline-block -rotate-1 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          &copy; {new Date().getFullYear()} ぎんが祭実行委員会. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
