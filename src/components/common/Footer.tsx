import Image from "next/image";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/TekZuri Logo - 1 - Edited.png"
            alt="TekZuri Logo"
            width={36}
            height={36}
          />
          <span className="font-medium text-gray-900 tracking-wide">TekZuri</span>
        </div>
        <p className="text-gray-500 text-sm tracking-wide">
          © <CurrentYear /> TekZuri — Work with Elegance
        </p>
      </div>
    </footer>
  );
}
