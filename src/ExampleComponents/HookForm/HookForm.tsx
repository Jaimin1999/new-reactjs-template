import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormData } from "./validation";
import NameInput from "./NameInput";

export default function HookForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert(`Form submitted! Name: ${data.name}`);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-4 bg-card border rounded-lg p-6 shadow-sm"
        >
          <NameInput />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
