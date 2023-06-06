import { Check } from "phosphor-react";

interface NewHabitFormProps {
    children: never[];
    // other props
  }

export function NewHabitForm(props: NewHabitFormProps) {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual o seu compromentimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="Ex: Beber água"
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label htmlFor="title">Qual a recorência?</label>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-400 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
