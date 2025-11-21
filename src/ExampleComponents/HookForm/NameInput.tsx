import { useFormContext } from "react-hook-form";
import { type FormData } from "./validation";

export default function NameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div>
      <label
        htmlFor="name"
        className="block text-sm font-medium text-foreground mb-2"
      >
        Name
      </label>
      <input
        id="name"
        type="text"
        {...register("name")}
        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        placeholder="Enter your name (max 10 letters)"
      />
      {errors.name && (
        <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
      )}
    </div>
  );
}

