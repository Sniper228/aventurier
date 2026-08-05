import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  helper?: string;
};

export function Input({
  label,
  error,
  helper,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name ?? label;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-zinc-200">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-accent focus:ring-2 focus:ring-accent/30",
          error && "border-accent-strong focus:border-accent-strong focus:ring-accent-strong/30",
          className,
        )}
        {...props}
      />
      {helper && !error ? (
        <p className="text-xs text-zinc-500">{helper}</p>
      ) : null}
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
