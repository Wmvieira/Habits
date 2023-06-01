import logoImage from "../assets/logo.png";
import { Plus } from "phosphor-react";

export function Header() {
  return (
    <div className="w-full max-w-3xL mx-auto flex items-center justify-around mb-8">
      <img src={logoImage} alt="Habits" />

      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </div>
  );
}