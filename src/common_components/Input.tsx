import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string | undefined;
  type?: string;
}

export default function FormInput<T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = "text",
}: InputProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>

      <input
        type={type}
        {...register(name)}
        className="
border
rounded
px-3
py-2
"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
